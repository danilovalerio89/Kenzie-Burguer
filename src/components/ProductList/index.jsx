import "./styles.css";
import Product from "../Product";

function ProductList({ dataApi, setCartArr, cartArr }) {
  const handleClick = (productId) => {
    const produtoFiltrado = dataApi.find(
      (elemento) => productId == elemento.id
    );
    const produtosArray = cartArr.find(
      (itemVerificado) => itemVerificado.id == productId
    );
    if (produtosArray !== produtoFiltrado) {
      setCartArr((state) => [...state, produtoFiltrado]);
    }
  };
  return (
    <>
      {!!dataApi &&
        dataApi.map((product) => (
          <Product key={product.id} item={product} handleClick={handleClick} />
        ))}
    </>
  );
}
export default ProductList;
