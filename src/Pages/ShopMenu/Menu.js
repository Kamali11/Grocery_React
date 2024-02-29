import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom'
import icon1 from '../../assets/raddish.png'
import icon2 from '../../assets/icon-2.jpg'
import icon3 from '../../assets/icon-3.jpg'
import icon4 from '../../assets/icon-4.jpg'
import icon5 from '../../assets/icon-5.jpg'
import icon6 from '../../assets/icon-6.jpg'
import icon7 from '../../assets/icon-7.jpg'
import icon8 from '../../assets/icon-8.jpg'
import icon9 from '../../assets/icon-9.jpg'
import icon10 from '../../assets/icon-10.jpg'



const Menu = () => {
  return (
    <div>
        <section id="section2">
            <div className="cata-title">
                <Link to={'/menu'}>Shop By Category</Link>
            </div>
            <div className="menu-card">
                <div className="row-1-icon">
                    <div className="icon-1">
                        <Link to='/vegtables'> <img src={icon1} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Vegetables</p>
                    </div>
                    <div className="icon-2">
                        <Link to='/fruits'><img src={icon2} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Fruits</p>
                    </div>
                    <div className="icon-3">
                        <Link to={'/nuts'}><img src={icon3} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Nuts</p>
                    </div>
                    <div className="icon-4">
                        <Link to={'/juices'}><img src={icon4} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Juices</p>
                    </div>
                    <div className="icon-5">
                        <Link to={'/grains'}><img src={icon5} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Grains</p>
                    </div>
                </div>
                <div className="row-2-icon">
                    <div className="icon-6">
                        <Link to={'/icecreams'}><img src={icon6} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Ice Creams</p>
                    </div>
                    <div className="icon-7">
                        <Link to={'/oils'}><img src={icon7} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Oils</p>
                    </div>
                    <div className="icon-8">
                        <Link to={'/frozenfoods'}><img src={icon8} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Frozen Foods</p>
                    </div>
                    <div className="icon-9">
                        <Link to={'/snacks'}><img src={icon9} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Snacks</p>
                    </div>
                    <div className="icon-10">
                        <Link to={'/groceries'}><img src={icon10} alt=""/></Link>
                        <p style={{textAlign:'center'}}>Other Groceries</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Menu
