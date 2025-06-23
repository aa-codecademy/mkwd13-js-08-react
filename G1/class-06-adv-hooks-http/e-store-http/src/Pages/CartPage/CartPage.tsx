import CartList from "../../Components/CartList/CartList";

function CartPage() {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>Cart</h2>
      </div>
      <div className="page-content">
        <CartList />
      </div>
    </section>
  );
}

export default CartPage;
