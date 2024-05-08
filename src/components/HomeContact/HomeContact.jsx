import './HomeContact.scss'

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


const HomeContact = () => {
  return (
    <div className="homeContact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="phoneNo">
                <span>+91 77021X54, +91 98685X425</span>
            </div>
            <div className="icons">
                <FacebookIcon className='icon'/>
                <InstagramIcon className='icon'/>
                <XIcon className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default HomeContact