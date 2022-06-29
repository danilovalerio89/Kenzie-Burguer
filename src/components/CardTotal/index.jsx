import Button from "../Button";
import "./styles.css";

function CardTotal({ cartArr, showCard, setCartArr }) {
  const removeAll = () => {
    setCartArr([]);
  };

  const sumCart = (arryCart) => {
    return arryCart.reduce((acc, cur) => acc + cur.price, 0);
  };
  return (
    <div className={showCard}>
      <h4 className="title_total_card">Total</h4>
      <p className="valor_total_card">R$ {sumCart(cartArr).toFixed(2)}</p>
      <Button propClass={"button_remove_all"} propFunc={removeAll}>
        Remover todos
      </Button>
    </div>
  );
}
export default CardTotal;
