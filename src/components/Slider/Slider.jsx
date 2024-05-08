import "./Slider.scss";

//icons
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";

const images = [
  "/gate.jpg",
  "/grill1.jpg",
  "/shed1.jpg",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    
      <div className="slider">
        <div
          className="container"
          style={{ transform: `translateX(-${currentSlide * 100}vw )` }}
        >
          <img className="img" src={images[0]} alt="" />
          <img className="img" src={images[1]} alt="" />
          <img className="img" src={images[2]} alt="" />
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon className="icon_child" />
          </div>
          <div className="icon" onClick={nextSlide} >
            <EastOutlinedIcon className="icon_child"/>
          </div>
        </div>
      </div>
    
  );
};

export default Slider;
