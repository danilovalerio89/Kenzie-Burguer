import "./styles.css";

function EmptyCart() {
  return (
    <section className="section_empty_cart">
      <div className="div_empty_cart">
        <h3 className="title_empty_cart">Seu carrinho está vazio</h3>
        <p className="text_empty_cart">Adicione itens</p>
      </div>
    </section>
  );
}
export default EmptyCart;
