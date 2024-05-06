import Card from '../Card/Card'
import './List.scss'
import { allProducts } from '../../Data/Data'


const List = ({catId,subCategory}) => {
    const selectedCat = allProducts.filter(item=>subCategory.includes(item.category))
    ? allProducts.filter(item => subCategory.includes(item.category))
    : allProducts;

  return (
    <div className='list'>
        { subCategory.length === 0 ?
          allProducts.map(item => (
            <Card item={item} key={item.id} />
          )) : selectedCat.map(item => (
            <Card item={item} key={item.id} />
          ))
        }
    </div>
  )
}

export default List