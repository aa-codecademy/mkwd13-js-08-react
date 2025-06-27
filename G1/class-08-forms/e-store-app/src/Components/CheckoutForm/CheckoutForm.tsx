import { useForm } from "react-hook-form";
import "./CheckoutForm.css";

interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitted },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (formValue: CheckoutFormValues) => {
    console.log("in ze on submit method");
    console.log(formValue);
  };

  return (
    <div className="CheckoutForm">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
        {!isValid && isSubmitted && (
          <div className="form-error">All fields are required</div>
        )}
        <div className="form-controls">
          <button type="button" onClick={() => reset()}>
            Reset
          </button>
          <button>Submit Order</button>
        </div>
      </form>
    </div>
  );
}
