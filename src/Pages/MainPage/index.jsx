import { useState, useEffect } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import ProductList from "../../components/ProductList";
import SectionProducts from "../../components/SectionProducts";
import { api } from "../../services/api";
import "./styles.css";

function MainPage() {
  const [dataApi, setDataApi] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [inputFilter, setInputFilter] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get().catch((err) => {
        console.log(err);
      });
      setDataApi(response.data);
    }
    fetchApi();
  }, []);
  return (
    <div className="main_page">
      <Header dataApi={dataApi} setInputFilter={setInputFilter} />
      <MainWrapper>
        <SectionProducts>
          <ProductList
            dataApi={inputFilter.length > 0 ? inputFilter : dataApi}
            setCartArr={setCartArr}
            cartArr={cartArr}
          />
        </SectionProducts>
        <Cart cartArr={cartArr} setCartArr={setCartArr} />
      </MainWrapper>
    </div>
  );
}
export default MainPage;
