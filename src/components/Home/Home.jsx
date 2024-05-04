import Categories from "../Categories/Categories"
import FeaturedProducts from "../FeatureProducts/FeaturedProducts"
import HomeContact from "../HomeContact/HomeContact"
import Slider from "../Slider/Slider"

const Home = () => {
  return (
    <div className="home">
        <Slider />
        <FeaturedProducts type="featured"/>
        <Categories />
        <HomeContact />
    </div>
  )
}

export default Home