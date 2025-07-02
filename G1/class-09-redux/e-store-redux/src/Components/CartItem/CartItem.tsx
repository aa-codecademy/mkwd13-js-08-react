import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./CartItem.css";
import { QuantityPanel } from "../QuantityPanel/QuantityPanel";
import { useAppDispatch } from "../../utils/hooks";
import { removeFromCart } from "../../state/slices/products.slice";

interface CartItemProps {
  product: Product;
}

function CartItem({ product }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <li className="CartItem">
      <strong>{product.title}</strong>
      <span>
        ${(product.price * product.quantity).toFixed(2)}
        <QuantityPanel product={product} />
        <Button
          onBtnClick={() => {
            dispatch(removeFromCart(product));
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
