import type { Product } from "../../models/product.model";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  return (
    <div
      className="ProductCard"
      onClick={() => {
        onSelectProduct(product);
      }}
    >
      <div className="card-body">
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-details">
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
