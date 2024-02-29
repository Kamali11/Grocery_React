import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'

import {oils} from '../../Data/OilData'

const Oils = ({handleAddCart}) => {
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
                    <Link to={'/oils'}>Oils</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                        <Link to={'/oils/1'}>Sunflower oil</Link>
                        <Link to={'/oils/2'}>Olive oil</Link>
                        <Link to={'/oils/3'}>Neem oil</Link>
                        <Link to={'/oils/4'}>Groundnut oil</Link>
                        <Link to={'/oils/5'}>Almond oil</Link>
                        <Link to={'/oils/6'}>Avacada oil</Link>
                        <Link to={'/oils/7'}>Coconut oil</Link>
                        <Link to={'/oils/8'}>Ghee</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Oils</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Improve job performance through reduced stress and increased attentiveness.Improve sleep.Kill bacteria, funguses and viruses.Reduce anxiety and pain.Reduce inflammation.Reduce nausea.</p>
                    </div>
                    <div className="row-1">
                        {oils.length > 0 ? (
                            oils.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/oils/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>oils</p>
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

export default Oils
