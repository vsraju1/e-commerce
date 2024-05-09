import HomeContact from "../HomeContact/HomeContact";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (<>
    <HomeContact />
    <div className="footer">
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span><Link to='products/gates' className="link">Gates</Link></span>
          <span><Link to='products/grills' className="link">Grills</Link></span>
          <span><Link to='products/shutters' className="link">Shutters</Link></span>
          <span><Link to='products/sheds' className="link">Sheds</Link></span>
          <span><Link to='products/all' className="link">More..</Link></span>
        </div>
        <div className="item">
          <h4>Links</h4>
          <span><Link className="link" to="/">Home</Link></span>
          <span><Link className="link" to="/products">Products</Link></span>
        </div>
        <div className="item about">
          <h4>About</h4>
          <span>VPFW specializes in creating custom gates and ironwork for buildings we blend craftsmanship with functionality to enhance the aesthetics and security of your structures. Whether its a residential home or a commercial property, VPFW delivers quality iron solutions tailored to your needs</span>
        </div>
        <div className="item about">
          <h4>Contact</h4>
          <span>
            Ph: +91 77023XXX54<br />
            Ph: +91 9866XXXX25
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">VPFW</span>
          <span className="copyright"> © copyright 2024, All Rights Reserved</span>
        </div>
        <div className="right">
          <h3><span>Pay with:</span> PayPal • VISA • MASTER CARD • RUPAY</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
