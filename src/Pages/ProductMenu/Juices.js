import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import {juices} from '../../Data/JuiceData'

const Juices = ({handleAddCart}) => {
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
                    <Link to={'/juices'}>Juices</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                        <Link to={'/juices/1'}>Apple Juice</Link>
                        <Link to={'/juices/2'}>Grapes Juice</Link>
                        <Link to={'/juices/3'}>Kiwi Juice</Link>
                        <Link to={'/juices/4'}>Lemon Juice</Link>
                        <Link to={'/juices/5'}>Mango Juice</Link>
                        <Link to={'/juices/6'}>Milkshake</Link>
                        <Link to={'/juices/7'}>Orange Juice</Link>
                        <Link to={'/juices/8'}>Rosemilk</Link>
                        <Link to={'/juices/9'}>Pomegrante Juice</Link>
                        <Link to={'/juices/10'}>Pear Juice</Link>
                        <Link to={'/juices/11'}>Stawberry Juice</Link>
                        <Link to={'/juices/12'}>Suagrcane</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Juices</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>By drinking juice, your body can absorb nutrients quickly, without having to digest fibers and other components in whole foods. Moreover, it helps you get a larger intake of vitamins and minerals—more so than you may be getting in your regular diet.</p>
                    </div>
                    <div className="row-1">
                        {juices.length > 0 ? (
                            juices.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/juices/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>juice</p>
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

export default Juices
