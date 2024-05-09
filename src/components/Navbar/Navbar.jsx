import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

//icons

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = () => {
    setMenuOpen(!menuOpen);
  };

  const cartProducts = useSelector((state) => state.products);
  const wishListProducts = useSelector((state) => state.wishList);

  let totalQuant = 0;
  for (const item of cartProducts){
    totalQuant += item.quantity;
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="menu">
          {!menuOpen ? (
        <MenuIcon className="icon" onClick={menu} />
      ) : (
        <CloseIcon className="icon" onClick={menu} />
      )}
          </div>
          <div className={`icons ${menuOpen ? 'opened' : ""}`}>
            <div className="item">
              <NavLink 
              className="link" to="products/gates"
              onClick={() => setMenuOpen(false)}
              >
                Gates
              </NavLink>
            </div>
            <div className="item">
              <NavLink 
              className="link" to="products/grills"
              onClick={() => setMenuOpen(false)}
              >
                Grills
              </NavLink>
            </div>
            <div className="item">
              <NavLink 
              className="link" to="products/shutters"
              onClick={() => setMenuOpen(false)}
              >
                Shutters
              </NavLink>
            </div>
            <div className="item">
              <NavLink 
              className="link" to="products/all"
              onClick={() => setMenuOpen(false)}
              >
                More..
              </NavLink>
            </div>
          </div>
        </div>
        <div className="center">
          <Link className="link logo" to="/">
            VPFW
          </Link>
        </div>
        <div className="right">

          <div className="icons">
            <SearchIcon className="icon"/>
            <NavLink className="link" to="/signup">
              <PersonOutlineIcon className="icon" />
            </NavLink>
            <div className="cartIcon">
              <NavLink className="link" to="/wishlist">
                <FavoriteBorderIcon className="icon" />
                <span>{wishListProducts.length}</span>
              </NavLink>
              
            </div>
            <div className="cartIcon">
              <NavLink to='cart' className="link">
              <ShoppingCartOutlinedIcon className="icon"/>
              <span>{totalQuant}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
