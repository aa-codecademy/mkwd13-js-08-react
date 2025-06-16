import { Navigate, useParams } from "react-router-dom";
import type { Product } from "../../models/product.model";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";

interface ProductDetailsPageProps {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
}

function ProductDetailsPage({ products, addToCart }: ProductDetailsPageProps) {
  const { id } = useParams();

  const foundProduct = products.find(product => product.id === Number(id));

  return (
    <section className="page">
      <div className="page-heading">
        <h2>Product Details</h2>
      </div>
      <div className="page-content">
        {foundProduct ? (
          <ProductDetailsPanel product={foundProduct} addToCart={addToCart} />
        ) : (
          <Navigate to="/not-found" />
        )}
      </div>
    </section>
  );
}
export default ProductDetailsPage;
