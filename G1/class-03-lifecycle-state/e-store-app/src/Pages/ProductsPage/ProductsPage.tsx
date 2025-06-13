import Button from "../../Components/Button/Button";
import ProductsList from "../../Components/ProductsList/ProductsList";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <section className="ProductsPage">
      <div className="buttons-container">
        <Button
          text="Toggle Info Panel"
          onButtonClick={() => {
            console.log("toggle info panel btn clicked");
          }}
        />
        <Button
          text="Fetch Products"
          onButtonClick={() => {
            console.log("toggle fetch products btn clicked");
          }}
        />
      </div>
      <div className="content">
        {/* ProductsList */}
        <ProductsList products={[]} />
        {/* ProductInfo */}
      </div>
    </section>
  );
}

export default ProductsPage;
