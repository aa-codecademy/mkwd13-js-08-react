import type { Product } from "../../models/product.model";
import classes from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  return (
    <div
      className={`${classes.ProductCard} ${
        product.stock <= 0 ? classes["out-of-stock"] : ""
      }`}
      onClick={() => {
        onSelectProduct(product);
      }}
    >
      <div className={classes.heading}>{product.title}</div>
      <p>{product.description}</p>
      <strong>
        Price: ${product.price} | Stock: {product.stock}
      </strong>
    </div>
  );
}

export default ProductCard;
