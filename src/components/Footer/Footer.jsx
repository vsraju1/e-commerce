import HomeContact from "../HomeContact/HomeContact";
import "./Footer.scss";

const Footer = () => {
  return (<>
    <HomeContact />
    <div className="footer">
      <div className="top">
        <div className="item">
          <h4>Categories</h4>
          <span>Gates</span>
          <span>Grills</span>
          <span>Shutters</span>
          <span>Sheds</span>
          <span>More..</span>
        </div>
        <div className="item">
          <h4>Links</h4>
          <span>Home</span>
          <span>Store</span>
          <span>FAQ</span>
        </div>
        <div className="item">
          <h4>About</h4>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis eos nobis laborum odio maiores esse minima adipisci facere velit quis porro expedita non atque ea, recusandae quos vitae voluptatum.</span>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quidem tempore ipsum possimus? Asperiores aliquam animi enim, quia labore cum non architecto. Minus voluptatibus nihil ab accusantium consequatur numquam harum?
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
