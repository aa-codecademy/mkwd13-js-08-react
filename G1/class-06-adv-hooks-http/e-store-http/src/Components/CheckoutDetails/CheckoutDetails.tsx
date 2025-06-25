import { useContext } from "react";
import "./CheckoutDetails.css";
import { ProductsContext } from "../../Contexts/ProductsContext";

export function CheckoutDetails() {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  return (
    <div className="CheckoutDetails">
      <ul className="checkout-list">
        {cartProducts.map((product, i) => (
          <li key={product.id}>
            <strong>{i + 1}.</strong> <span>{product.title}</span>
            <span className="item-quantity">
              ${product.price} X {product.quantity}
            </span>
            <span className="item-total">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
