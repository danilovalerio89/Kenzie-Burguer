import "./styles.css";
import Button from "../Button";

function Product({ item, handleClick }) {
  const { category, img, name, price, id } = item;

  return (
    <div className="div_product">
      <figure className="figure_product">
        <img className="img_product" src={img} alt={name} />
      </figure>
      <h3 className="product_name">{name}</h3>
      <span className="product_type">{category}</span>
      <p className="product_price">R$ {price.toFixed(2)}</p>
      <Button
        propClass={"button-add"}
        propId={id}
        propFunc={(event) => handleClick(event.target.id)}
      >
        Adicionar
      </Button>
    </div>
  );
}
export default Product;
