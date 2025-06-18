import { Navigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";

function ProductDetailsPage() {
  const { products } = useContext(ProductsContext);

  const { id } = useParams();

  const foundProduct = products.find(product => product.id === Number(id));

  return (
    <section className="page">
      <div className="page-heading">
        <h2>Product Details</h2>
      </div>
      <div className="page-content">
        {foundProduct ? (
          <ProductDetailsPanel product={foundProduct} />
        ) : (
          <Navigate to="/not-found" />
        )}
      </div>
    </section>
  );
}
export default ProductDetailsPage;
