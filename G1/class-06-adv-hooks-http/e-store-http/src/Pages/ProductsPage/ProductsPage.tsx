import { useContext, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./ProductsPage.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");

  console.log("searchBy result", sortBy);

  console.log(searchParams);

  // if (sortBy === "price") filteredProducts.sort((a, b) => a.price - b.price);

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
