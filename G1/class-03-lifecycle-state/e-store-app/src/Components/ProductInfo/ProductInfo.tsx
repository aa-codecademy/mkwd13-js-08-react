import { useEffect } from "react";
import type { Product } from "../../models/product.model";
import "./ProductInfo.css";

interface ProductInfoProps {
  selectedProduct: Product | null;
}

function ProductInfo({ selectedProduct }: ProductInfoProps) {
  let intervalCount = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      intervalCount++;
      console.log(intervalCount);
    }, 1000);

    return () => {
      console.log(
        "This will be executed before the component is unmounted from the dom, same as componentWillUnmount"
      );
      //Clear interval clears an interval by using that intervals id
      clearInterval(intervalId);
    };
  }, [intervalCount]);

  useEffect(() => {
    console.log("use effect called when selected product changes");
  }, [selectedProduct]);

  const infoCardJSX = selectedProduct && (
    <div className="info-card">
      <h3>{selectedProduct.title}</h3>
      <div className="info-body">
        <img src={selectedProduct.image} alt={selectedProduct.title} />
        <div>
          <p>{selectedProduct.description}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Rating: {selectedProduct.rating.rate}/5⭐</p>
          <p>Review Count: {selectedProduct.rating.count}👤</p>
          <p className="info-price">
            <strong>Price: ${selectedProduct.price}</strong>
          </p>
        </div>
      </div>
    </div>
  );

  const notFoundJSX = (
    <div className="info-card not-selected">
      <h3>No Product Selected</h3>
    </div>
  );

  return (
    <div className="ProductInfo">
      {selectedProduct ? infoCardJSX : notFoundJSX}
    </div>
  );
}

export default ProductInfo;
