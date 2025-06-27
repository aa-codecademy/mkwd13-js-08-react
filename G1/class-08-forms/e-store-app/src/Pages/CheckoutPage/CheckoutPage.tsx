import { useForm } from "react-hook-form";
import { CheckoutDetails } from "../../Components/CheckoutDetails/CheckoutDetails";
import { CheckoutForm } from "../../Components/CheckoutForm/CheckoutForm";
import { Page } from "../../Layout/Page/Page";
import type { AddOrderReq } from "../../models/order.model";
import { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { httpService } from "../../services/http.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

export function CheckoutPage() {
  const navigate = useNavigate();

  const checkoutForm = useForm<CheckoutFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    },
  });

  const { getProductsInCart, resetCart } = useContext(ProductsContext);

  const cartProducts = getProductsInCart();

  const onOrderSubmit = () => {
    if (!checkoutForm.formState.isValid) return;
    console.log("order submitted");
    const { firstName, lastName, address, phoneNumber } =
      checkoutForm.getValues();

    const addOrderReq: AddOrderReq = {
      fullName: `${firstName} ${lastName}`,
      address,
      phoneNumber,
      date: new Date(),
      products: cartProducts.map(product => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    };

    postNewOrder(addOrderReq);
  };

  const postNewOrder = async (reqBody: AddOrderReq) => {
    try {
      await httpService.post("/orders", reqBody);
      resetCart();
      toast.success("Order successfully created!");
      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while creating order");
    }
  };

  return (
    <Page title="Checkout">
      <CheckoutForm form={checkoutForm} />
      <CheckoutDetails onOrderSubmit={onOrderSubmit} />
    </Page>
  );
}
