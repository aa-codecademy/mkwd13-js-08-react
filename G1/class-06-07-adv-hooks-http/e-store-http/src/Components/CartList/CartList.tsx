import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function CartList() {
  const navigate = useNavigate();

  const { getProductsInCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  const total = getProductsInCart().reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="CartList">
          <ol>
            {cartProducts.map(product => (
              <CartItem key={product.id} product={product} />
            ))}
          </ol>
          <div className="total">
            <span>
              Total: <strong>${total.toFixed(2)}</strong>
            </span>
            <Button onBtnClick={() => navigate("/checkout")}>
              Go to checkout
            </Button>
          </div>
        </div>
      ) : (
        <h3 className="CartList-heading">
          No products in cart... don't be scared of the weather!
        </h3>
      )}
    </>
  );
}

export default CartList;
