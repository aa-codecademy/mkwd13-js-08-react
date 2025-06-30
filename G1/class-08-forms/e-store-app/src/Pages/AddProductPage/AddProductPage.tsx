import { useForm } from "react-hook-form";
import { Page } from "../../Layout/Page/Page";
import { useEffect } from "react";
import "./AddProductsPage.css";

interface AddProductFormValues {
  title: string;
  price: string;
  image: string;
  description: string;
  category: string;
  stock: string;
}

export function AddProductPage() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitted },
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

  const onSubmit = (formValue: AddProductFormValues) => {
    console.log(formValue);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const placeholderImg =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

  return (
    <Page title="Add Product">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            {...register("price", { required: true, min: 0, max: 10000 })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" {...register("stock", { min: 0 })} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
          />
        </div>
        <div className="img-display">
          <img
            alt="Product Image"
            src={watchImgValue || placeholderImg}
            onError={e => {
              console.log(e);
              console.log("image error");
              //Rest image to placeholder
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" {...register("category", { required: true })}>
            <option value="mens clothing">Men's clothing</option>
            <option value="womens clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
          </select>
        </div>
        {!isValid && isSubmitted && (
          <div className="form-error">All fields are required</div>
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
  );
}
