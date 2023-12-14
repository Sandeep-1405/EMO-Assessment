import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './signup.css'

function Signup(){
    let navigate = useNavigate()

    const onSubmit=()=>{
        
        navigate('/login')
    }
        return(
        <div className='bg'>
            <div className='card '>
                <h1 className='m-2'>Signup</h1>
                <hr className='hr'/>
                <div>
                    <label for="fname" >First Name </label>
                    <br/>
                    <input type="text" id="fname" placeholder="First name" required className='sinput'/>
                    <br/>

                    <label for="lname" >Last Name </label>
                    <br/>
                    <input type="text" id="lname" placeholder="Last name" required className='sinput'/>
                    <br/>

                    <label for="email" >Email </label>
                    <br/>
                    <input type="text" id="email" placeholder="Email" required className='sinput'/>
                    <br/>

                    <label for="phone" >Phone Number </label>
                    <br/>
                    <input type="text" id="phone" placeholder="Phone Number" required className='sinput'/>
                    <br/>

                    <label for="password" >Set Password </label>
                    <br/>
                    <input type="password" id="phone" placeholder="Password" required className='sinput'/>
                    <br/>

                    <button className="btn btn-primary m-3" onClick={onSubmit}>Submit</button>
                    <br/>
                
                    <a  onClick={onSubmit} className='btn btn-outline-warning m-3'>Already a member Login here</a>
                    
                </div>
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZi6q5JSIAniOLXM1lpNcJvOO_sNU3q5_R8w&usqp=CAU' alt='img' className='img' />
        </div>
    )
    
}
export default Signup