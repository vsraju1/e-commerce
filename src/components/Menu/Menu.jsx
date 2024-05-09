import './Menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="links">
            <Link to='products/gates'>
            Gates
            </Link>
            <Link to='products/grills'>
            Grills
            </Link>
            <Link to='products/sheds'>
            Sheds
            </Link>
            <Link to='products/pergola'>
            Pergola
            </Link>
            <Link to='products/shutters'>
            Shutters
            </Link>
            <Link to='products/staircase'>
            Staircase
            </Link>
        </div>
    </div>
  )
}

export default Menu