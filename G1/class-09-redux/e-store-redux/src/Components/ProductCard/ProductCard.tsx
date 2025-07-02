import { Link } from "react-router-dom";
import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductCard.css";
import { useAppDispatch } from "../../utils/hooks";
import { addToCart } from "../../state/slices/products.slice";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
        <p>${product.price}</p>
        <Button
          disabled={product.inCart}
          onBtnClick={() => {
            dispatch(addToCart(product));
          }}
        >
          {product.inCart ? (
            "ADDED"
          ) : (
            <i className="fa-solid fa-cart-arrow-down"></i>
          )}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
