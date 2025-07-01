import { useForm } from "react-hook-form";
import { Page } from "../../Layout/Page/Page";
import { useContext, useEffect, useState } from "react";
import "./AddProductsPage.css";
import { addFormValdations } from "./add-form.const";
import { toast } from "react-toastify";
import type { AddProductReq } from "../../models/product.model";
import { httpService } from "../../services/http.service";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../Components/Spinner/Spinner";
import { ProductsContext } from "../../Contexts/ProductsContext";

export interface AddProductFormValues {
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  stock: string;
}

const PLACEHOLDER_IMG =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

export function AddProductPage() {
  const { fetchProducts } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddProductFormValues>({
    defaultValues: {
      title: "",
      price: "",
      image: "",
      description: "",
      category: "",
      stock: "",
    },
  });

  const watchImgValue = watch("image");

  const [imgSrc, setImgSrc] = useState(PLACEHOLDER_IMG);

  const onSubmit = (formValue: AddProductFormValues) => {
    console.log(formValue);

    const reqBody: AddProductReq = {
      ...formValue,
      price: Number(formValue.price),
      stock: Number(formValue.stock),
    };

    postNewProduct(reqBody);
  };

  const postNewProduct = async (reqBody: AddProductReq) => {
    setIsLoading(true);

    try {
      const response = await httpService.post("/products", reqBody);

      console.log(response);

      toast.success("Product added successfully");
      fetchProducts();
      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Unable to add product, please try again");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!watchImgValue) return;

    const timerId = setTimeout(() => {
      setImgSrc(watchImgValue);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [watchImgValue]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      {isLoading && <Spinner />}
      <Page title="Add Product">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className={errors.title ? "invalid-control" : ""}
              type="text"
              id="title"
              {...register("title", addFormValdations.title)}
            />
          </div>
          {errors.title && (
            <div className="control-error">{errors.title.message}</div>
          )}
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className={errors.price ? "invalid-control" : ""}
              type="text"
              id="price"
              {...register("price", addFormValdations.price)}
            />
          </div>
          {errors.price && (
            <div className="control-error">{errors.price.message}</div>
          )}
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              className={errors.stock ? "invalid-control" : ""}
              type="text"
              id="stock"
              {...register("stock", addFormValdations.stock)}
            />
          </div>
          {errors.stock && (
            <div className="control-error">{errors.stock.message}</div>
          )}
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              className={errors.image ? "invalid-control" : ""}
              type="text"
              id="image"
              {...register("image", addFormValdations.image)}
            />
          </div>
          {errors.image && (
            <div className="control-error">{errors.image.message}</div>
          )}
          <div className="img-display">
            <img
              alt="Product Image"
              src={imgSrc}
              onError={() => {
                console.log("image error");
                toast.error("Invalid image URL");
                setImgSrc(PLACEHOLDER_IMG);
                setValue("image", "");
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className={errors.description ? "invalid-control" : ""}
              type="text"
              id="description"
              {...register("description", addFormValdations.description)}
            />
          </div>
          {errors.description && (
            <div className="control-error">{errors.description.message}</div>
          )}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className={errors.category ? "invalid-control" : ""}
              id="category"
              {...register("category", addFormValdations.category)}
            >
              <option value="mens clothing">Men's clothing</option>
              <option value="womens clothing">Women's clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelry">Jewelry</option>
            </select>
          </div>
          {errors.category && (
            <div className="control-error">{errors.category.message}</div>
          )}
          <div className="form-controls">
            <button
              type="button"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </Page>
    </>
  );
}
