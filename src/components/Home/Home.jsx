import { useEffect } from "react"
import Categories from "../Categories/Categories"
import FeaturedProducts from "../FeatureProducts/FeaturedProducts"
import HomeContact from "../HomeContact/HomeContact"
import Slider from "../Slider/Slider"
import { sheds, shutters, pergola } from "../../Data/Data"

const allProducts = [].concat(sheds, shutters, pergola);



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
        <Slider />
        <Categories />
        <FeaturedProducts type="featured"/>
        
    </div>
  )
}

export default Home