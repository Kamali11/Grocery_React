import React from 'react'
import { Link } from 'react-router-dom'
import './TrackOrder.css'

const TrackOrder = () => {
  return (
    <div>
         <div class="veg">
                <Link style={{color: '#149104'}}>Home</Link>
                <p>{">"}</p>
                <Link>My Account</Link>
        </div>
        <p class="title-order">Orders</p>
    <div className='forms'>
        <section className="login-form">
           <p style={{color: '#149104', fontSize: '1.6em'}}>Login</p>
           <form className="form-content">
               <p>Username or email address <span style={{color: 'red'}}>*</span></p>
               <input type="text" />
               <p>Password <span style={{color: 'red'}}>*</span></p>
               <input type="text" />
               <div className="btn-lgn">
               <button type="button">Log In</button>
               <input type="checkbox" style={{width: '20px', marginTop: '15px'}} />
               <p>Remember me</p>
               </div>
             <Link className="lost-psw" style={{marginTop: '10px'}}>Lost your password?</Link>
         </form>
     </section>
     <section className="register-form">
        <p style={{color: '#149104', fontSize: '1.6em'}}>Register</p>
        <form className="form-content">
            <p>Username <span style={{color: 'red'}}>*</span></p>
            <input type="text"/>
            <p>Email address <span style={{color: 'red'}}>*</span></p>
            <input type="text"/>
            <p>Password <span style={{color: 'red'}}>*</span></p>
            <input type="text"/>
            <p style={{fontSize: '15px', color: '#40404085'}}><span style={{color: 'red'}}>*</span>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            <button type="button">Register</button>     
        </form>
     </section>
    </div>
    </div>
  )
}

export default TrackOrder