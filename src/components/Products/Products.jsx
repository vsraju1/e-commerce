import { useState } from 'react'
import List from '../List/List'
import './Products.scss'
import { useParams } from 'react-router-dom'


const Products = () => {

  const [sort, setSort] = useState(null)
  const catId = useParams()
  const [maxPrice, setMaxPrice] = useState(100000)




  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h3>Categories</h3>
          <div className='inputItem'>
            <input type="checkbox" id='gate' value='gate' />
            <label htmlFor="gate">Gates</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='grill' value='grill' />
            <label htmlFor="grill">Grills</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='shed' value='shed' />
            <label htmlFor="shed">Sheds</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='shutter' value='shutter' />
            <label htmlFor="shutter">Shutters</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='pergola' value='pergola' />
            <label htmlFor="pergola">Pergola</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='railing' value='railing' />
            <label htmlFor="railing">Railings</label>
          </div>
        </div>
        <div className="filterItem">
          <h3>Fiter by price</h3>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100000} onChange={e => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='des' value="des" name='price' onChange={e=>setSort("des")}/>
            <label htmlFor="asc">Price (Hgihest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/3406027/pexels-photo-3406027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="catImg" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products