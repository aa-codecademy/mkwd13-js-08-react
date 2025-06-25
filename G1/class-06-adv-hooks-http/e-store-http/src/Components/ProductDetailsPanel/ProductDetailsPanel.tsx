import { useContext } from "react";
import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductDetailsPanel.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { QuantityPanel } from "../QuantityPanel/QuantityPanel";

interface ProductDetailsPanel {
  product: Product;
}

function ProductDetailsPanel({ product }: ProductDetailsPanel) {
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel-content">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="panel-details">
          <p>{product.description}</p>
          <div className="panel-controls">
            <p>${product.price}</p>
            {product.inCart ? (
              <QuantityPanel product={product} />
            ) : (
              <Button
                disabled={product.inCart}
                onBtnClick={() => {
                  addToCart(product);
                }}
              >
                <i className="fa-solid fa-cart-arrow-down"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPanel;
