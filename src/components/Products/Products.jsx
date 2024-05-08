import { useState } from "react";
import List from "../List/List";
import "./Products.scss";
import { useParams } from "react-router-dom";

//data

const categoryData = [
  {
    subCat: "gates",
  },
  {
    subCat: "grills",
  },
  {
    subCat: "shutters",
  },
  {
    subCat: "sheds",
  },
  {
    subCat: "pergola",
  },
  {
    subCat: "staircase",
  },
];

const Products = () => {
  const [sort, setSort] = useState(null);
  const catId = useParams().id;
  // const {id} = useParams()
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const ischecked = e.target.checked;

    setSelectedSubCats(
      ischecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h3>Categories</h3>
          {categoryData?.map((item) => (
            <div className="inputItem" key={item.subCat}>
              <input
                type="checkbox"
                id={item.subCat}
                value={item.subCat}
                onChange={handleChange}
              />
              <label htmlFor={item.subCat}>{item.subCat}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <List
        className='list'
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCategory={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
