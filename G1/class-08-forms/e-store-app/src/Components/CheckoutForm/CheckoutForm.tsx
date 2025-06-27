import { type UseFormReturn } from "react-hook-form";
import "./CheckoutForm.css";
import type { CheckoutFormValues } from "../../Pages/CheckoutPage/CheckoutPage";

interface CheckoutFormProps {
  form: UseFormReturn<CheckoutFormValues>;
}

export function CheckoutForm({ form }: CheckoutFormProps) {
  console.log("checkout form rerendered");

  const {
    register,
    formState: { isValid, isDirty },
  } = form;

  return (
    <div className="CheckoutForm">
      <form className="form">
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            {...register("lastName", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
          />
        </div>
        {!isValid && isDirty && (
          <div className="form-error">All fields are required</div>
        )}
      </form>
    </div>
  );
}
