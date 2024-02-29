import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'

import { vegs } from '../../Data/VegitableData'

const Vegtable = ({handleAddCart}) => {
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
                    <Link to={'/vegtable'}>Vegetables</Link>
                </div>
            </section>

            <section className="vegtable-content">
                <section className="left-side" id="left-btn">
                    <div className="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i className="fa-solid fa-x"></i></button>
                    </div>
                    <div className="left-buttons">
                        <div className="left-btn">
                            <Link to={'/vegtable/1'}>Tomato</Link>
                            <Link to={'/vegtable/2'}>Onion</Link>
                            <Link to={'/vegtable/3'}>Potato</Link>
                            <Link to={'/vegtable/4'}>Carrot</Link>
                            <Link to={'/vegtable/5'}>Cauliflower</Link>
                            <Link to={'/vegtable/6'}>Brocoli</Link>
                            <Link to={'/vegtable/7'}>Cabbage</Link>
                            <Link to={'/vegtable/8'}>Raddish</Link>
                            <Link to={'/vegtable/9'}>Small Onion</Link>
                            <Link to={'/vegtable/10'}>Green Beans</Link>
                            <Link to={'/vegtable/11'}>Beetroot</Link>
                            <Link to={'/vegtable/12'}>Garlic</Link>
                            <Link to={'/vegtable/13'}>Raw Banana</Link>
                            <Link to={'/vegtable/14'}>Bitter Gourd</Link>
                            <Link to={'/vegtable/15'}>White Raddish</Link>
                            <Link to={'/vegtable/16'}>Lady Finger</Link>
                            <Link to={'/vegtable/17'}>Sweet Potato</Link>
                            <Link to={'/vegtable/18'}>Pumpkin</Link>
                            <Link to={'/vegtable/19'}>Drum Stick</Link>
                            <Link to={'/vegtable/20'}>Snake Gourd</Link>
                            <Link to={'/vegtable/21'}>Curry Leaf</Link>
                            <Link to={'/vegtable/22'}>Coriender Leaf</Link>
                            <Link to={'/vegtable/23'}>Mentha Spicata</Link>
                              <Link to={'/vegtable/24'}>Ginger</Link>
                        </div>
                    </div>
                </section>


                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Vegetables</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>A diet rich in and fruits can lower blood pressure, reduce the risk of heart disease
                            and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a
                            positive effect upon blood sugar, which can help keep appetite in check.</p>
                    </div>
                    <div className="row-1">
                        {vegs.length > 0 ? (
                            vegs.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/vegtable/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>Vegtable</p>
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

export default Vegtable
