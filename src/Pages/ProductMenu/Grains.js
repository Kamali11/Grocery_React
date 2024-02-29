import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import { grains } from '../../Data/GrainData'

const Grains = ({handleAddCart}) => {
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
                    <Link to={'/grains'}>Grains</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                       <Link>Basmati Rice</Link>
                       <Link>Rice</Link>
                       <Link>Wheat</Link>
                       <Link>Blackeye Peas</Link>
                       <Link>Black gram</Link>
                       <Link>Black Sesame</Link>
                       <Link>ChickPea</Link>
                       <Link>Coffee grains</Link>
                       <Link>Coriender seeds</Link>
                       <Link>Corn</Link>
                       <Link>Cumin</Link>
                       <Link>Green Peas</Link>
                       <Link>Fenugreek</Link>
                       <Link>Garbenzo Beans</Link>
                       <Link>Mung Beans</Link>
                       <Link>Mustrad</Link>
                       <Link>Pepper</Link>
                       <Link>Pistachios</Link>
                       <Link>Red beans</Link>
                       <Link>Small cumin</Link>
                       <Link>Soybeans</Link>
                       <Link>Split bengal gram</Link>
                       <Link>Split Pigeon gram</Link>
                       <Link>Kidney beans</Link>
                      
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Grains</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Whole grains provide fiber, vitamins, minerals and other nutrients. Whole-grain foods help control of cholesterol levels, weight and blood pressure. These foods also help lower the risk of diabetes, heart disease and other conditions.</p>
                    </div>
                    <div className="row-1">
                        {grains.length > 0 ? (
                            grains.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/grains/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>grains</p>
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

export default Grains
