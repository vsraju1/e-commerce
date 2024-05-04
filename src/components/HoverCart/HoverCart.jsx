import './HoverCart.scss'

//icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const Data = [
    {
        id: 1,
        title: "Gate",
        description: 'This is the product descriptio. Usually it should be more than 100 words so to make the requirement complete iam writing this much of content. sorry but thank you.',
        img: "https://images.pexels.com/photos/22718464/pexels-photo-22718464/free-photo-of-fewa-lake-phewa-lake-pokhara-iv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/22924802/pexels-photo-22924802/free-photo-of-the-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        isNew: true,
        oldPrice: 28000,
        price: 22000,
    },
    {
        id: 1,
        title: "Gate",
        description: 'This is the product descriptio. Usually it should be more than 100 words so to make the requirement complete iam writing this much of content. sorry but thank you.',
        img: "https://images.pexels.com/photos/22718464/pexels-photo-22718464/free-photo-of-fewa-lake-phewa-lake-pokhara-iv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/22924802/pexels-photo-22924802/free-photo-of-the-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        isNew: true,
        oldPrice: 28000,
        price: 22000,
    }

]
const HoverCart = () => {
  return (
    <div className="cart">
        <h2>Products in your cart</h2>
        {Data?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h3>{item.title}</h3>
                    <p>{item.description?.substring(0,50)}</p>
                    <div className="price">1 X ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='deleteItem'/>
            </div>
        ))}

        <div className="total">
            <span>SUBTOTAL:</span>
            <span>$123</span>
        </div>
        <button>Proceed to Checkout</button>
        <p className='reset'>RESET CART</p>
    </div>
  )
}

export default HoverCart