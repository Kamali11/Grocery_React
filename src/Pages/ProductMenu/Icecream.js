import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import {icecream} from '../../Data/IcecreamData'

const Icecream = ({handleAddCart}) => {
    const openMenu=()=>{
        const icon=document.getElementById('left-btn')
        icon.style.width='100%'
     }
     const closeMenu=()=>{
        const icon=document.getElementById('left-btn')
        icon.style.width='0'
     }
  return (
    <div>
        <section>
                <div className="veg">
                    <Link to={'/'} style={{ color: "#149104" }}>Home</Link>
                    <p>{">"}</p>
                    <Link to={'/menu'}>Shop Catagory</Link>
                    <p>{">"}</p>
                    <Link to={'/icecreams'}>IceCream</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>

                    </div>
                    <div class="left-buttons">
                      <Link to={'/icecreams/1'}>Blueberry Scoop</Link>
                      <Link to={'/icecreams/2'}>Bowl Ice</Link>
                      <Link to={'/icecreams/3'}>Jam waffle</Link>
                      <Link to={'/icecreams/4'}>Chocolate vennila</Link>
                      <Link to={'/icecreams/5'}>Cone ice</Link>
                      <Link to={'/icecreams/6'}>crepe Banana</Link>
                      <Link to={'/icecreams/7'}>Delicious Ice</Link>
                      <Link to={'/icecreams/8'}>Dessert Candies</Link>
                      <Link to={'/icecreams/9'}>Icecream</Link>
                      <Link to={'/icecreams/10'}>Waffle cone</Link>
                      <Link to={'/icecreams/11'}>Stawberry ice</Link>
                      <Link to={'/icecreams/12'}>Vennila Cone</Link>
                      <Link to={'/icecreams/13'}>Vennila Chocolate</Link>
                      <Link to={'/icecreams/14'}>Stawberry cone</Link>
                      <Link to={'/icecreams/15'}>Pista ice</Link>
                      <Link to={'/icecreams/16'}>Mixed flavour</Link>
                      <Link to={'/icecreams/17'}>Stawberry cone</Link>
                      <Link to={'/icecreams/18'}>Wafer stick</Link>
                      <Link to={'/icecreams/19'}>Kulfi</Link>
                      <Link to={'/icecreams/20'}>vennila</Link>
                      <Link to={'/icecreams/21'}>Chocobar</Link>
                      <Link to={'/icecreams/22'}>Dessert banana</Link>
                      <Link to={'/icecreams/23'}>Yogurt popsicles</Link>
                      <Link to={'/icecreams/24'}>Oreo scoop</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Ice Creams</p>
                          <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p> Ice cream is a calcium-rich food, and calcium helps keep your body strong and boosts your metabolism. Adding a higher fat ice cream will help make you feel fuller longer too.</p>
                    </div>
                    <div className="row-1">
                        {icecream.length > 0 ? (
                            icecream.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/icecreams/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>ice cream</p>
                                            <p className="tle-veg">{item.product_name}</p>
                                                </Link>

                                            <div className="adding">
                                                <p className="price" style={{ color: "rgb(207, 8, 108)" }}>MRP {item.mrp}</p>
                                                <Link onClick={() => handleAddCart(item)}><i className="fa-solid fa-cart-arrow-down"></i>Add</Link>
                                            </div>
                                            <div className="offer">
                                                {item.offer ? (
                                                    <p><i>Offer {item.offer_presentage}</i></p>
                                                ) : ''}
                                            </div>
                                    </div>
                                )
                            })) : 'Data Not Found'}

                    </div>


                </section>
            </section>
    </div>
  )
}

export default Icecream

