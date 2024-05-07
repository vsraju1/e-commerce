import './LoginSignUp.scss'
import { Link } from 'react-router-dom'

const LoginSignUp = ({prop}) => {
  
  return (
    <div className="loginSignUp">
        <div className="ls_container">
            <h1>{prop}</h1>
            <div className="ls_fields">
                {prop === 'sign up' && <input type="text" placeholder="Your Name" />}
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
            </div>
            <button className='btn'>Continue</button>
            <p className="ls_login">Already have an account? {prop === 'login' ? (
              <span><Link className='link' to='/signup'>SIGN UP here</Link></span>
            ): (
              <span><Link to='/login' className='link'>LOGIN here</Link></span>
            )}</p>
            <div className="ls_agree">
                <input type="checkbox"  name="" id=""/>
                <p>By Continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignUp