import { Link } from "react-router-dom"
import './Navbar.scss'

//icons
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import HoverCart from "../HoverCart/HoverCart";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const cart = () => {
    setCartOpen(prev => !prev)
  }


  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
              <div className="logo">
                <Link className="link" to="/">VPFW</Link>
              </div>
              <div className="item">
                <Link className="link" to="products/gates">Gates</Link>
              </div>
              <div className="item">
                <Link className="link" to="products/grills">Grills</Link>
              </div>
              <div className="item">
                <Link className="link" to="products/shutters">Shutters</Link>
              </div>
              <div className="item">
                <Link className="link" to="products/all">More..</Link>
              </div>
            </div>
            <div className="center">
              <input type="search">
              </input>
                <SearchIcon />
            </div>
            <div className="right">
            <div className="item">
                <Link className="link" to="#">Home</Link>
            </div>
            <div className="item">
                <Link className="link" to="products/all">About</Link>
            </div>
            <div className="item">
                <Link className="link" to="products/all">Contact</Link>
            </div>
              <div className="icons">
                <CurrencyRupeeIcon />
                <PersonOutlineIcon />
                <FavoriteBorderIcon />
                <div className="cartIcon">
                <ShoppingCartOutlinedIcon onClick={cart}/>
                <span>0</span>
                </div>
              </div>
            </div>
        </div>
        {cartOpen && <HoverCart />}
    </div>
  )
}

export default Navbar