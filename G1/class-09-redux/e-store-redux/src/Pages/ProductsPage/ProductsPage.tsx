import { useCallback, useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./ProductsPage.css";
import { useSearchParams } from "react-router-dom";
import { Page } from "../../Layout/Page/Page";
import { useAppSelector } from "../../utils/hooks";

function ProductsPage() {
  const products = useAppSelector(state => state.products.value);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

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

  useEffect(() => {
    setFilteredProducts(products);
  }, [products, onSearch]);

  useEffect(() => {
    if (query) onSearch(query);
  }, [query, onSearch]);

  return (
    <Page title="Products">
      <div>
        <SearchInput onSearch={onSearch} defaultValue={query} />
      </div>
      <div className="ProductsPage">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}

export default ProductsPage;
