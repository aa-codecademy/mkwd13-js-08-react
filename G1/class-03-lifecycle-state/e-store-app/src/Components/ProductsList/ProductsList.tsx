import type { Product } from "../../models/product.model";
import "./ProductsList.css";

interface ProductsListProps {
  products: Product[];
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="ProductsList">
      {products.length ? <div>Products List</div> : <h2>No Products Found</h2>}
    </div>
  );
}

export default ProductsList;
