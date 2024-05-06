import './FeaturedProducts.scss'
import Card from '../Card/Card'
import { allProducts } from '../../Data/Data'

const featuredItems = allProducts.filter(item=> item.featured)

const FeaturedProducts = ({type}) => {
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore eaque earum, totam atque possimus fugit officiis deserunt, delectus laudantium placeat ad maiores numquam eos tempora? Asperiores ex commodi, ea voluptate amet officiis nostrum sequi.</p>
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