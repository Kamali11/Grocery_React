import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import { nuts } from '../../Data/NutData'

const Nuts = ({handleAddCart}) => {
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
                    <Link to={'/nuts'}>Nuts</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                        <Link to={'/nuts/1'}>Almond Nut</Link>
                        <Link to={'/nuts/2'}>Cashew Nut</Link>
                        <Link to={'/nuts/3'}>Hazel Nut</Link>
                        <Link to={'/nuts/4'}>Macadamia Nut</Link>
                        <Link to={'/nuts/5'}>Peanuts</Link>
                        <Link to={'/nuts/6'}>Pecans</Link>
                        <Link to={'/nuts/7'}>Pista</Link>
                        <Link to={'/nuts/8'}>Walnut</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Nuts</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Nuts and seeds are good sources of protein, healthy fats, fibres, vitamins and minerals. Nuts and seeds regulate body weight as their fats are not fully absorbed and they regulate food intake. Nuts and seeds contain unsaturated fats and other nutrients that provide protective effects against heart disease and diabetes.</p>
                    </div>
                    <div className="row-1">
                        {nuts.length > 0 ? (
                            nuts.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/nuts/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>nut</p>
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

export default Nuts
