import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import ProductsList from "../../Components/ProductsList/ProductsList";
import "./ProductsPage.css";
import type { Product } from "../../models/product.model";
import productsJSON from "../../data/products.json";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";

function ProductsPage() {
  // console.log("products page rerendered");

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isInfoShown, setIsInfoShown] = useState(true);

  //With empty array will only run once, same as componentDidMount
  useEffect(() => {
    setTimeout(() => {
      setProducts(productsJSON);
    }, 1500);
  }, []);

  //First user effect only runs when isInfoShownChanges
  useEffect(() => {
    console.log("is info shown changed, use effct executed");
  }, [isInfoShown]);

  //Second use effect only runs when selectedProductChanges
  useEffect(() => {
    console.log("selected product changed, use effect executed");
  }, [selectedProduct]);

  //Never set a dependency of a useEffect in the useEffect callback, infinite loop, breaks app
  // useEffect(() => {
  //   setIsInfoShown(prev => !prev);
  // }, [isInfoShown]);

  const onSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="ProductsPage">
      <div className="buttons-container">
        <Button
          text="Toggle Info Panel"
          onButtonClick={() => {
            console.log("toggle info panel btn clicked");
            setIsInfoShown(prev => !prev);
          }}
        />
        <Button
          text="Fetch Products"
          onButtonClick={() => {
            console.log("toggle fetch products btn clicked");
            setProducts(productsJSON);
          }}
        />
      </div>
      <div className="content">
        <ProductsList products={products} onSelectProduct={onSelectProduct} />
        {isInfoShown && <ProductInfo selectedProduct={selectedProduct} />}
      </div>
    </section>
  );
}

export default ProductsPage;
