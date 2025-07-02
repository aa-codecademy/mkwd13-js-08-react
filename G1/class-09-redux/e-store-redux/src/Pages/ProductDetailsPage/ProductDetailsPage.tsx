import { Navigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import { Page } from "../../Layout/Page/Page";
import { useAppSelector } from "../../utils/hooks";

function ProductDetailsPage() {
  const products = useAppSelector(state => state.products.value);

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
