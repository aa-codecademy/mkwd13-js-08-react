import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../models/product.model";
import { Spinner } from "../Components/Spinner/Spinner";
import { httpService } from "../services/http.service";
import { toast, ToastContainer } from "react-toastify";

interface ProductsContextInterface {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
  removeFromCart: (selectedProduct: Product) => void;
  addProductQuantity: (selectedProduct: Product) => void;
  removeProductQuantity: (selectedProduct: Product) => void;
  getProductsInCart: () => Product[];
}

export const ProductsContext = createContext<ProductsContextInterface>({
  products: [],
  addToCart() {},
  removeFromCart() {},
  addProductQuantity() {},
  removeProductQuantity() {},
  getProductsInCart() {
    return [];
  },
});

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);

    try {
      // const res = await fetch("http://localhost:3000/api/products");

      const { data } = await httpService.get("/products");

      const products: Product[] = data;

      setProducts(
        products.map(product => ({ ...product, inCart: false, quantity: 0 }))
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    // setIsLoading(true);
    // fetch("http://localhost:3000/api/products")
    //   .then(res => res.json())
    //   .then((products: Product[]) => {
    //     console.log(products);
    //     setProducts(products.map(product => ({ ...product, inCart: false })));
    //     setIsLoading(false);
    //   })
    //   .catch(() => {
    //     setIsLoading(false);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, []);

  const addToCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (selectedProduct.id === product.id) {
          product.inCart = true;
          product.quantity = 1;
          return product;
        }
        return product;
      });
    });
    toast.success("Product added to cart");
  };

  const removeFromCart = (selectedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, inCart: false }
          : product
      )
    );
    toast.info("Product removed from cart");
  };

  const addProductQuantity = (selectedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const removeProductQuantity = (selectedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const getProductsInCart = () => products.filter(product => product.inCart);

  return (
    <>
      {isLoading && <Spinner />}
      <ToastContainer position="bottom-right" />
      <ProductsContext.Provider
        value={{
          products,
          addToCart,
          removeFromCart,
          getProductsInCart,
          addProductQuantity,
          removeProductQuantity,
        }}
      >
        {children}
      </ProductsContext.Provider>
    </>
  );
}

export default ProductsProvider;
