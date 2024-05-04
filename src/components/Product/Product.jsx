import { useState } from 'react'
import'./Product.scss'

//icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Data = [
  "https://images.pexels.com/photos/4315558/pexels-photo-4315558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5845961/pexels-photo-5845961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

]

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const qunatitydec = () => {
    setQuantity(quantity === 0 ? 0 : (prev) => prev - 1)
  }

  const qunatityInc = () => {
    setQuantity(prev => prev + 1)
  }

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={Data[0]} alt="" onClick={e=>setSelectedImage(0)}/>
          <img src={Data[1]} alt="" onClick={e=>setSelectedImage(1)}/>
        </div>
        <div className="mainImg">
          <img src={Data[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque dicta exercitationem labore voluptate magni sint accusantium eum! Aliquam facere a numquam excepturi possimus nesciunt aspernatur. Ex ipsa corporis aut!</p>
        <div className="quantity">
          <button onClick={qunatitydec}>-</button>
          <span>{quantity}</span>
          <button onClick={qunatityInc}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item"><FavoriteBorderIcon /> ADD TO WISH LIST</div>
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
  )
}

export default Product