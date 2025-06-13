import type { Product } from "../../models/product.model";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

interface ProductsListProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, onSelectProduct }: ProductsListProps) {
  // console.log("products list rerendered");

  return (
    <div className="ProductsList">
      {products.length ? (
        products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
          />
        ))
      ) : (
        <h2>No Products Found</h2>
      )}
    </div>
  );
}

export default ProductsList;
