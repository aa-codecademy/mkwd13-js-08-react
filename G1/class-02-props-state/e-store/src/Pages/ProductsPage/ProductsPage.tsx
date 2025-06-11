import type { Product } from "../../models/product.model";
import "./ProductsPage.css";

function ProductsPage() {
  const productsMock: Product[] = [
    {
      title: "TV",
      description: "A very nice LED TV",
      price: 599.98,
      stock: 1,
    },
    {
      title: "Dishwasher",
      description: "Freedom from the kitchen sink guaranteed",
      price: 299.99,
      stock: 5,
    },
    {
      title: "Fridge",
      description: "You will not resist the urge to open me all the time",
      price: 999.99,
      stock: 0,
    },
  ];

  return (
    <section className="ProductsPage">
      <h2>Available Products</h2>
      <div className="products-container">
        {productsMock.map((product, i) => (
          <div key={i}>
            {i + 1}. {product.title}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;
