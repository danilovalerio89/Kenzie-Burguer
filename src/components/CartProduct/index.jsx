import "./styles.css";
import Button from "../Button";

function CartProduct({ product, setCartArr, cartArr }) {
  const { category, img, name, price, id } = product;

  const removeUnique = (productId) => {
    const products = cartArr.filter((itens) => itens.id !== productId);
    setCartArr(products);
  };

  return (
    <>
      <section className="section_cart_product">
        <div className="div_cart_product">
          <figure className="figure_cart_product">
            <img className="img_cart_product" src={img} alt={name} />
          </figure>
          <div className="div_info_cart_product">
            <h4 className="title_cart_item">{name}</h4>
            <span className="type_cart_item">{category}</span>
          </div>
          <Button
            propClass={"button-remove"}
            propId={id}
            propFunc={(event) => removeUnique(Number(event.target.id))}
          >
            Remover
          </Button>
        </div>
      </section>
    </>
  );
}

export default CartProduct;
