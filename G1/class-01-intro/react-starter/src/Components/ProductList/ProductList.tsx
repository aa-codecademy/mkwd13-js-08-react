import classes from "./ProductList.module.css";

function ProductList() {
  console.log(classes);

  const productsListJsx = (
    <ul className={classes.list}>
      <li>Product One</li>
      <li>Product Two</li>
      <li>Product Three</li>
    </ul>
  );

  const itemListJsx = (
    <ul className={classes.list}>
      <li>Item One</li>
      <li>Item Two</li>
      <li>Item Three</li>
    </ul>
  );

  const areProductsShown = false;

  return (
    <>
      {areProductsShown ? <h3>Products List</h3> : <h3>Items List</h3>}
      {areProductsShown ? productsListJsx : itemListJsx}
    </>
  );
}
export default ProductList;
