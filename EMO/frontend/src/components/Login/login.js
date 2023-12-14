import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import bg_video from '../Login/bg_video.mp4'
import Home from '../Home/home'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () =>{
    const navigate = useNavigate();
    const sign = useNavigate();

    function onClickLogin(){
        navigate('/home')
    }
    function onClickSignup(){
        sign('/')
    }
    return(
        <div className="bg">
            <img src='https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg' alt='img' className='limg '/>

            <div className="content">
                <h1 className='loginheading'>Login</h1>
                <div>
                    <input type='text' placeholder='Email' className='sinput' />
                    <br/>
                    <input type='password' placeholder='Password'className='sinput'/>
                    <div className=''>
                        <a href='' className='forgot'>forgot password</a>
                        <a onClick={onClickSignup} className='forgot'>signup</a>
                        
                    </div>

                    <button className='btns btn btn-primary' onClick={onClickLogin}>Login</button>
                    
                    
                </div>
                
            </div>
            
        </div>
        
    )
}
export default Login