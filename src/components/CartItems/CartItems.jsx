import { useEffect } from "react";
import "./CartItems.scss";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeItem } from "../../reducers/CartSlice";
import { Link } from "react-router-dom";

const CartItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartItems = useSelector((state) => state.products);
  const total = cartItems.length;
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    cartItems?.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  return (
    <div className="cartContainer">
      <div className="cartList">
      <h2>Items in your cart({total})</h2>
        <div className="left">
          {cartItems?.map((item) => (
              
            <div
            className="wishListWrapper" key={item.id}>
              <hr />
              <div className="cartListItems">
              <Link to={`/product/${item.id}`} className="link"> 
                <div className="left">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="desc">
                    <div className="desc_text">
                      <h3>{item.title}</h3>
                      <p className="desctext">{item.description}</p>
                    </div>
                    
                    <h4>
                      {item.quantity} X ₹{item.price}
                    </h4>
                  </div>
                </div>
                </Link>
                <div className="delIcon">
                  <DeleteOutlineIcon
                    onClick={() => dispatch(removeItem(item.id))}
                    className="icon"
                  />
                </div>
              </div>
            </div>
            
          ))}
        </div>
        
      </div>
      <div className="right">
          <h3>Price Details</h3>
          <hr />
          <div className="price item">
            <p>Price</p>
            <p>₹{totalPrice()}</p>
          </div>
          <div className="discount item">
            <p>discount</p>
            <p className="dprice">₹0</p>
          </div>
          <div className="delPrice item">
            <p>Deliver Charges</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="totalprice item">
            <h4>Total Amount</h4>
            <h4>₹{totalPrice()}</h4>
          </div>
         <button>Checkout</button>
       </div>
    </div>
  );
};

export default CartItems;
