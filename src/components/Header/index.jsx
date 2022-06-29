import { useState } from "react";
import Logo from "../../img/Logo.png";
import Button from "../Button";
import "./styles.css";

function Header({ dataApi, setInputFilter }) {
  const [inputValue, setInputValue] = useState("");

  const encontrarItem = (procurarEsseItem) => {
    const findInputItem = dataApi.filter(
      (item) =>
        item.name.toLowerCase() == procurarEsseItem ||
        item.category
          .normalize("NFD")
          .replace(/\p{Diacritic}/gu, "")
          .toLowerCase() == procurarEsseItem
    );
    setInputFilter(findInputItem);
  };

  return (
    <header className="header_container">
      <div className="div_header">
        <figure>
          <img
            src={Logo}
            alt="Logo - Burguer Kenzie"
            onClick={() => setInputFilter(dataApi)}
          />
        </figure>
        <div className="div_input_search">
          <input
            value={inputValue}
            onChange={(event) =>
              setInputValue(
                event.target.value
                  .normalize("NFD")
                  .replace(/\p{Diacritic}/gu, "")
                  .toLowerCase()
              )
            }
            className="input_header"
            type="text"
            placeholder="Digitar Pesquisa"
          />
          <Button
            propClass={"button-search"}
            propFunc={() => encontrarItem(inputValue)}
          >
            Pesquisar
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
