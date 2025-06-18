import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import type { Product } from "../../models/product.model";
import "./ProductsPage.css";

interface ProductsPageProps {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
}

function ProductsPage({ products, addToCart }: ProductsPageProps) {
  //Filtered products is derived from products and is always going to read the value from them
  //The original products array will not be mutated and changed meaning we can search freely without losing data
  const [filteredProducts, setFilteredProducts] = useState(products);

  const onSearch = (value: string) => {
    setFilteredProducts(
      products.filter(product => product.title.toLowerCase().includes(value))
    );
  };

  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="page-content">
        <div>
          <SearchInput onSearch={onSearch} />
        </div>
        <div className="card-container">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
