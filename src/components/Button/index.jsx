import "./styles.css";

function Button({ children, propFunc, propClass, propId }) {
  return (
    <button className={propClass} onClick={propFunc} id={propId}>
      {children}
    </button>
  );
}
export default Button;
