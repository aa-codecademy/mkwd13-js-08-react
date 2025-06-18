import { Link } from "react-router-dom";
import type { Product } from "../../models/product.model";
import Button from "../Button/Button";
import "./ProductCard.css";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  console.log("product card rerendered");
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className="ProductCard">
      <Link to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-details">
        <p>${product.price}</p>
        <Button
          text={product.inCart ? "ADDED" : "🛒"}
          disabled={product.inCart}
          onBtnClick={() => {
            addToCart(product);
          }}
        />
      </div>
    </div>
  );
}

export default ProductCard;
