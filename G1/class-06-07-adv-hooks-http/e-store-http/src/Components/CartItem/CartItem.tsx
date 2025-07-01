import { useContext } from "react";
import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./CartItem.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { QuantityPanel } from "../QuantityPanel/QuantityPanel";

interface CartItemProps {
  product: Product;
}

function CartItem({ product }: CartItemProps) {
  const { removeFromCart } = useContext(ProductsContext);

  return (
    <li className="CartItem">
      <strong>{product.title}</strong>
      <span>
        ${(product.price * product.quantity).toFixed(2)}
        <QuantityPanel product={product} />
        <Button
          onBtnClick={() => {
            removeFromCart(product);
          }}
          style={{ marginLeft: "20px" }}
        >
          <i className="fa-solid fa-x"></i>
        </Button>
      </span>
    </li>
  );
}

export default CartItem;
