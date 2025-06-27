import { CheckoutDetails } from "../../Components/CheckoutDetails/CheckoutDetails";
import { CheckoutForm } from "../../Components/CheckoutForm/CheckoutForm";
import { Page } from "../../Layout/Page/Page";

export function CheckoutPage() {
  return (
    <Page title="Checkout">
      <CheckoutForm />
      <CheckoutDetails />
    </Page>
  );
}
