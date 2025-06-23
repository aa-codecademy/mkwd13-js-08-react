import { useEffect, useState } from "react";
import axios from "axios";
const FAKE_STORE_API_URL = "https://fakestoreapi.com/products";

// Function defined in service file
const fetchProducts = async () => {
  // axios will make GET REQUEST with .get()
  const response = await axios.get(FAKE_STORE_API_URL);
  console.log("AXIOS RESPONSE", response);

  // AXIOS WILL AUTOMATICALLY PARSE THE RESPONSE AND WILL ADD IT IN THE PROPERTY DATA

  return response.data;
};

interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
}
export const WithAxios = () => {
  const [products, setProducts] = useState<Product[]>([]); // the value we provide in useState() is actually the default value for the state variable
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  // 1st argument => callback/effect that will exute
  // 2nd argument => dependency list
  // if deps array [] is empty => this effect will execute ONLY once, when the component is inited.
  useEffect(() => {
    // 1st approach to resolve a promise
    // setIsLoading(true);
    // setError(undefined);
    // fetchProducts()
    //   .then((result) => {
    //     console.log("result", result);
    //     setProducts(result);
    //   })
    //   .catch((error) => {
    //     console.error("ERROR HAPPENED", error);
    //     setError("Failed to fetch products, please try again later.");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    // 2nd approach IIFE
    (async () => {
      try {
        setError(undefined); // Clean error message on each try to re-fetch
        setIsLoading(true);
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("ERROR HAPPENED", error);
        setError("Failed to fetch products, please try again later.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) {
    return (
      // this can be reusable component
      <h2 style={{ color: "red" }}>{error}</h2>
    );
  }

  return (
    <>
      <h1>With Axios</h1>
      {/* isLoading === true */}
      {isLoading && <h2>Loading...</h2>}

      {/* Approach #1 */}
      {/* {products.length > 0 && (
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      )}

      {products.length === 0 && <h2>No products.</h2>} */}

      {/* Approach #2 */}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      ) : (
        <h2>No products</h2>
      )}
    </>
  );
};
