import CartProduct from "../CartProduct";
import EmptyCart from "../EmptyCart";
import CardTotal from "../CardTotal";
import "./styles.css";

function Cart({ cartArr, setCartArr }) {
  return (
    <aside className="header_cart">
      <header className="div_title">
        <h3 className="text_title">Carrinho de compras</h3>
      </header>

      <>
        {cartArr.length > 0 ? (
          cartArr.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              setCartArr={setCartArr}
              cartArr={cartArr}
            />
          ))
        ) : (
          <EmptyCart />
        )}
        <CardTotal
          setCartArr={setCartArr}
          cartArr={cartArr}
          showCard={cartArr.length > 0 ? "div_total_card" : "diplay_none"}
        />
      </>
    </aside>
  );
}

export default Cart;
