import { useCallback, useContext, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./ProductsPage.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  // const sortBy = searchParams.get("sortBy");
  // if (sortBy === "price") filteredProducts.sort((a, b) => a.price - b.price);

  const onSearch = useCallback(
    (value: string) => {
      setSearchParams(prevParams => {
        prevParams.set("q", value);
        return prevParams;
      });

      setFilteredProducts(
        products.filter(product => product.title.toLowerCase().includes(value))
      );
    },
    [products, setSearchParams]
  );

  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="page-content">
        <div>
          <SearchInput onSearch={onSearch} defaultValue={query} />
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
