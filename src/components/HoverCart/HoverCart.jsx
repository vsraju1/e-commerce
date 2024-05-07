import './HoverCart.scss'
import { useDispatch } from 'react-redux';

//icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../reducers/CartSlice';



const HoverCart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state)=> state.products)

  const totalPrice = () => {
    let total = 0;
    cartProducts?.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2)
  }
  return (
    <div className="cart">
        <h2>Products in your cart</h2>
        {cartProducts?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h3>{item.title}</h3>
                    <p>{item.description?.substring(0,50)}</p>
                    <div className="price">{item.quantity} X ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='deleteItem' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
        ))}

        <div className="total">
            <span>SUBTOTAL:</span>
            <span>${totalPrice()}</span>
        </div>
        <button>Proceed to Checkout</button>
        <p className='reset' onClick={()=>dispatch(resetCart())}>RESET CART</p>
    </div>
  )
}

export default HoverCart