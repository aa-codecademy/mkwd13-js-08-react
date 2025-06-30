import { Navigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { Page } from "../../Layout/Page/Page";

function ProductDetailsPage() {
  const { products } = useContext(ProductsContext);

  const { id } = useParams();

  const foundProduct = products.find(product => product.id === Number(id));

  return (
    <Page title="Product Details">
      {foundProduct ? (
        <ProductDetailsPanel product={foundProduct} />
      ) : (
        <Navigate to="/not-found" />
      )}
    </Page>
  );
}
export default ProductDetailsPage;
