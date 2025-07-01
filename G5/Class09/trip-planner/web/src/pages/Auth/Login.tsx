import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { LoginRequest } from "../../types/auth.type";
import { useContext } from "react";
import { AuthContext, type AuthContextType } from "../../context/auth.context";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const { login } = useContext<AuthContextType>(AuthContext);

  const onSubmit = async (data: LoginRequest) => {
    console.log("Login data is:", data);

    try {
      await login(data.email, data.password);
    } catch (error) {}
    // todo: perform login request
    // todo: on success login navigate to root (/)
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        {/* EMAIL */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },

              //   validate: (value) => {
              //     console.log("here", value);

              //     if (!value.includes("@") || value.includes("protonmail")) {
              //       //   return "You email does not contain @"
              //       // ;

              //       return "Invalid email";
              //     }

              //     // if (value.includes("protonmail")) {
              //     //   return "Protonmail not supported";
              //     // }

              //     const splittedValue = value.split(".");

              //     return true; // all is valid
              //   },
            })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <button>Login</button>
        <p className="auth-link">
          Don't have an account? <Link to={"/register"}>Register Here</Link>{" "}
        </p>
      </form>
    </div>
  );
};
