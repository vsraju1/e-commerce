
// import "../Products/Products.scss";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import './CatProducts.scss'

//data
import { allProducts } from "../../Data/Data";

const CatProducts = () => {
  const catId = useParams().id;
  const filterdProducts = allProducts.filter((item) => item.category === catId);

  return (
    <div className="products">
      <div className="right">
        <div className="list">
          {catId === "all"
            ? allProducts.map((item) => <Card item={item} key={item.id} />)
            : filterdProducts.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default CatProducts;



