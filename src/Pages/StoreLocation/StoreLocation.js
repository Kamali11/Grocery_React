import React from 'react'
import { Link } from 'react-router-dom'
import './StoreLocation.css'

const StoreLocation = () => {
  return (
    <div>
        
    <div className="veg">
        <Link to={'/home'} style={{color: '#149104'}}>Home</Link>
        <p>{'<'}</p>
        <Link to={'/storelocation'}>Location</Link>
    </div>

    <section className="whole-sec">
    <section>
        <div className="left-contact">
            <div className="leftTitle">
                <i className="fa-solid fa-phone"></i>
                <p style={{color:'#149104', fontSize:'22px'}}>Call to Us :</p>
            </div>
            <p style={{width:'90%'}}>We’re available from 10 am – 10 pm IST,7 days a week</p>
            <a>Customer Service:</a>
            <p>6-146-389-574</p>
            <a>Careers:</a>
            <p>6-146-389-575</p>
           </div>
           <hr style={{border: '1px dotted #cccaca'}}/>
           <div className="left-contact" style={{marginTop:'20px'}}>
               <div className="leftTitle">
                <i className="fa-solid fa-envelope"></i>
                <p style={{color:'#149104', fontSize:'22px'}}>Write to Us :</p>
               </div>
               <p style={{width:'90%'}}>Fill out our form and we will contact you within 24 hours.</p>
               <a>Customer Service:</a>
               <p>customer@example.com</p>
               <a>Careers:</a>
               <p>careers@example.com</p>
           </div>
    </section>

    <section className="right-contact">
        <div>
            <input type="text" placeholder="Name *" />
            <input type="text" placeholder="Email *" />
            <input type="text" placeholder="Phone *" />
           <textarea cols="30" rows="10" placeholder="message"></textarea> 
        </div>
        <button type="button">Send Message</button>
    </section>
   </section>

   <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15719.381580079305!2d78.14503004999999!3d9.94681865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709015163737!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{border: 0}}
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade" />
        </div>
    </div>
  )
}

export default StoreLocation