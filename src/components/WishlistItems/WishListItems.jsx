import './WishListItems.scss'
import { useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { removeWishList } from '../../reducers/WishListSlice';



const WishListItems = () => {
  const wishListItems = useSelector(state=> state.wishList)
  const total = wishListItems.length;
  const dispatch = useDispatch();

  return (
    <div className='wishList'>
      <div className="headers">
        <h3>My WishList({total})</h3>
      </div>
      {wishListItems?.map((item)=>(
        <div className="wishListWrapper" key={item.id}>
            <hr />
          <div className="wishListItems">
            <div className="left">
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="desc">
                <div className="desc_text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
                <h4>₹{item.price}</h4>
              </div>
            </div>
            <div className="right">
              <DeleteOutlineIcon onClick={() => dispatch(removeWishList(item.id))} className='icon'/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WishListItems