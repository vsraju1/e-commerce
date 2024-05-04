import './FeaturedProducts.scss'
import Card from '../Card/Card'

const Data = [
    {
        id: 1,
        title: "Gate",
        img: "https://images.pexels.com/photos/22718464/pexels-photo-22718464/free-photo-of-fewa-lake-phewa-lake-pokhara-iv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/22924802/pexels-photo-22924802/free-photo-of-the-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        isNew: true,
        oldPrice: 28000,
        price: 22000,
    },{
        id: 2,
        title: "Pergola",
        img: "https://images.pexels.com/photos/20141251/pexels-photo-20141251/free-photo-of-cockburn-st-edinburgh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/20370118/pexels-photo-20370118/free-photo-of-porto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        isNew: false,
        oldPrice: 45000,
        price: 39000,
    },{
        id: 3,
        title: "Gate with design",
        img: "https://images.pexels.com/photos/22476019/pexels-photo-22476019/free-photo-of-close-up-of-a-wild-duck-in-flight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/9768136/pexels-photo-9768136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew: true,
        oldPrice: 33000,
        price: 29000,
    },
    {
        id: 4,
        title: "Shed",
        img: "https://images.pexels.com/photos/139309/pexels-photo-139309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/6578427/pexels-photo-6578427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew: false,
        oldPrice: 96000,
        price: 85000,
    }
]


const FeaturedProducts = ({type}) => {
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore eaque earum, totam atque possimus fugit officiis deserunt, delectus laudantium placeat ad maiores numquam eos tempora? Asperiores ex commodi, ea voluptate amet officiis nostrum sequi.</p>
        </div>
        <div className="bottom">
            {Data.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts