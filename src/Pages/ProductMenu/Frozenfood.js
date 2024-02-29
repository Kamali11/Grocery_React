import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import { frozenfoods } from '../../Data/FrozenfoodData'

const Frozenfood = ({handleAddCart}) => {
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
                    <Link to={'/frozenfoods'}>Frozenfood</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                         <Link to={'/frozenfoods/1'}>Fresh Milk</Link>
                         <Link to={'/frozenfoods/2'}>Organic Egg</Link>
                         <Link to={'/frozenfoods/3'}>Apple</Link>
                         <Link to={'/frozenfoods/4'}>Tomato</Link>
                         <Link to={'/frozenfoods/5'}>Grapes</Link>
                         <Link to={'/frozenfoods/6'}>Orange</Link>
                         <Link to={'/frozenfoods/7'}>Potato</Link>
                         <Link to={'/frozenfoods/8'}>Ghee</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Frozenfood</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Generally, frozen foods retain their vitamins and minerals and there is no change to the carbohydrate, protein or fat content. In some cases, frozen foods have more vitamins and minerals compared to fresh because fresh foods lose vitamins and minerals over time while freezing preserves nutrients.</p>
                    </div>
                    <div className="row-1">
                        {frozenfoods.length > 0 ? (
                            frozenfoods.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/frozenfoods/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>frozenfood</p>
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

export default Frozenfood
