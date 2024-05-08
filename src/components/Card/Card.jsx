import "./Card.scss";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/CartSlice";
import { addtoWishList, removeWishList } from "../../reducers/WishListSlice";
import { useSelector } from "react-redux";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector(state => state.wishList)
  const isItem = wishListItems.some(wishItem => wishItem.id === item.id)


  return (
    <>
      <div className="card">
        <Link className="link" to={`/product/${item.id}`}>
          <div className="image">
            {item.isNew && <span>New Arrival</span>}

            <img src={item.img} alt="" className="mainImg" />
            <img src={item?.img2} alt="" className="secondImg" />
          </div>
          <h2>{item.title}</h2>
        </Link>
        <div className="prices">
          <div className="price_desc">
            <h3>₹{item.price}</h3>
            <h3>₹{item?.oldPrice}</h3>
          </div>
          <div className="prices_icon">
            {isItem ? 
            <FavoriteIcon
              onClick={() =>
                dispatch(
                  removeWishList(item.id)
                )
              }
              className="icon"
            /> : 
            <FavoriteBorderIcon
              onClick={() =>
                dispatch(
                  addtoWishList({
                    id: item.id,
                    title: item.title,
                    description: item.desc,
                    price: item.price,
                    img: item.img,
                  })
                )
              }
              className="icon"
            />}
            <span
              onClick={() =>
                dispatch(
                  addItem({
                    id: item.id,
                    title: item.title,
                    description: item.desc,
                    price: item.price,
                    img: item.img,
                    quantity: 1,
                  })
                )
              }
            >
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
