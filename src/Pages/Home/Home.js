import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img1 from '../../assets/back-grd1.jpg'
import img2 from '../../assets/back-grd2.jpg'
import img3 from '../../assets/back-grd3.jpg'
import Menu from '../ShopMenu/Menu'
import TopDeals from '../TopDeals/TopDeals'
import NewArrivals from '../NewArrivals/NewArrivals'




   
const Home = () => {


  return (
    <div>
      
      <section id="slider-container">
            <div className="slider-content" id="slider-content"> 
                <div className="slide">
                    <img src={img1} alt="src."/>
                    <div className="inside inside-1">
                        <p className="item-1">Order vegetables online at affordable price and best quality</p>
                        <p className="free">Get FREE delivery on all orders!</p>
                        <button><Link to={'/vegtables'}>Order Now!</Link></button>
                    </div>
                </div>
                <div className="slide">
                    <img src={img2} alt="src."/>
                    <div className="inside inside-2">
                        <p className="item-2">Buy Nuts and Dry Fruits</p>
                        <p className="free">Get FREE delivery on all orders!</p>
                        <button><Link>Order Now!</Link></button>
                    </div>

                </div>
                <div className="slide">
                    <img src={img3} alt="src."/>
                    <div className="inside inside-3">
                        <p className="item-3">Fresh Fruits are available</p>
                        <p className="free">Get FREE delivery on all orders!</p>
                        <button><Link>Order Now!</Link></button>
                    </div>
                </div>
            </div>
</section>


        {/* menupage */}

        <div>
            <Menu/>
            <TopDeals/>
            <NewArrivals/>
        </div>

       
    </div>
  )
}

export default Home
