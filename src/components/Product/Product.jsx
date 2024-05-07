import { useState } from "react";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//data
import { allProducts } from "../../Data/Data";

//icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { addItem } from "../../reducers/CartSlice";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams()
  
  const dispatch = useDispatch()
  
  const qunatitydec = () => {
    setQuantity(quantity === 1 ? 1 : (prev) => prev - 1);
  };
  
  const qunatityInc = () => {
    setQuantity((prev) => prev + 1);
  };
  
  const item = allProducts.find((item) => item.id === id)
  const [selectedImage, setSelectedImage] = useState(item.img);

  return (
    <div>
      
        <div className="product">
          <div className="left">
            <div className="images">
              <img src={item.img} alt="" onClick={(e) => setSelectedImage(item.img)} />
              <img src={item.img2} alt="" onClick={(e) => setSelectedImage(item.img2)} />
            </div>
            <div className="mainImg">
              <img src={selectedImage} alt="" />
            </div>
          </div>
          <div className="right">
            <h2>{item.title}</h2>
            <span className="price">{item.price}</span>
            <p>
              {item.desc}
            </p>
            <div className="quantity">
              <button onClick={qunatitydec}>-</button>
              <span>{quantity}</span>
              <button onClick={qunatityInc}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addItem({
              id: item.id,
              title: item.title,
              description: item.desc,
              price: item.price,
              img: item.img,
              quantity,
            }))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: VPFW</span>
              <span>Product Type: Gate</span>
              <span>Tag: home, gate</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Product;
