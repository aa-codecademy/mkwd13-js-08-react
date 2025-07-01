import type { RegisterOptions } from "react-hook-form";
import type { AddProductFormValues } from "./AddProductPage";

export const addFormValdations: Record<
  keyof AddProductFormValues,
  RegisterOptions<AddProductFormValues>
> = {
  title: {
    required: { value: true, message: "Title is required" },
    minLength: {
      value: 3,
      message: "Title must not be less than 3 characters long",
    },
    maxLength: {
      value: 100,
      message: "Title must not be more than 100 characters long",
    },
  },
  price: {
    required: { value: true, message: "Price is required" },
    min: { value: 0, message: "Price must not be less than 0" },
    max: { value: 10000, message: "Price must not be more than 10.000" },
  },
  stock: {
    required: { value: true, message: "Stock is required" },
    min: { value: 0, message: "Stock must not be less than 0" },
  },
  category: {
    required: { value: true, message: "Category is required" },
  },
  description: {
    required: { value: true, message: "Description is requried" },
  },
  image: {
    required: { value: true, message: "Image is required" },
  },
};
