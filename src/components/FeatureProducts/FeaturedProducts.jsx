import './FeaturedProducts.scss'
import Card from '../Card/Card'
import { allProducts } from '../../Data/Data'

const featuredItems = allProducts.filter(item=> item.featured)

const FeaturedProducts = ({type}) => {
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Our featured products are carefully selected to represent the pinnacle of our craftsmanship. From ornate wrought iron gates to sturdy industrial structures, each piece reflects our commitment to quality, durability, and design excellence. Whether its a custom railing, a decorative grille, or a functional steel beam, our featured products stand out for their precision engineering and aesthetic appeal. Explore our collection and experience the artistry that defines our brand.</p>
        </div>
        <div className="bottom">
            {featuredItems.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts