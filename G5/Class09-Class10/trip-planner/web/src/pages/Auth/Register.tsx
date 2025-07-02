import { useForm } from "react-hook-form";
import type { RegisterRequest } from "../../types/auth.type";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors, isValid, isLoading, isSubmitting },
  } = useForm<RegisterRequest & { confirmPassword: string }>({
    mode: "onChange",
  });

  // RENAMING isLoading to isRegistering to avoid same variable names. (isLoading was the same as the one from useForm)
  const { isLoading: isRegistering, register: registerUser } =
    useContext(AuthContext);

  const watchedPassword = watch("password");

  const onSubmit = async (
    data: RegisterRequest & { confirmPassword: string }
  ) => {
    // unregister("confirmPassword");
    if (!isValid) return; // preventing submitting invalid form

    await registerUser(data.email, data.password, data.name);

    // TODO: HANDLE ERRORS
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full name */}
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            id="fullName"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />

          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        {/* confirm - password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watchedPassword || "Passwords do not match.",
            })}
          />
          {errors.confirmPassword && (
            <span className="error-message">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button disabled={!isValid || isRegistering}>Register</button>
      </form>
    </div>
  );
};
