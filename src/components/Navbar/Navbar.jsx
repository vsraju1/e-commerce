import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useSelector } from "react-redux";

//icons
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import HoverCart from "../HoverCart/HoverCart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);

  const wishList = () => {
    setWishListOpen((prev) => !prev);
  };
  const cart = () => {
    setCartOpen((prev) => !prev);
  };

  const cartProducts = useSelector((state) => state.products);
  const wishListProducts = useSelector((state) => state.wishList);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="menu">
            <MenuIcon className="icon" />
          </div>
          <div className="icons">
            <div className="item">
              <Link className="link" to="products/gates">
                Gates
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="products/grills">
                Grills
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="products/shutters">
                Shutters
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="products/all">
                More..
              </Link>
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
            <Link className="link" to="/signup">
              <PersonOutlineIcon className="icon" />
            </Link>
            <div className="cartIcon">
              <Link className="link" to="/wishlist">
                <FavoriteBorderIcon className="icon" onClick={wishList} />
              </Link>
              <span>{wishListProducts.length}</span>
            </div>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon className="icon" onClick={cart} />
              <span>{cartProducts.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <HoverCart />}
    </div>
  );
};

export default Navbar;
