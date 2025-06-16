import ProductCard from "../../Components/ProductCard/ProductCard";
import type { Product } from "../../models/product.model";
import "./ProductsPage.css";

interface ProductsPageProps {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
}

function ProductsPage({ products, addToCart }: ProductsPageProps) {
  return (
    <section className="page ProductsPage">
      <div className="page-heading">
        <h2>Products</h2>
      </div>
      <div className="card-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
