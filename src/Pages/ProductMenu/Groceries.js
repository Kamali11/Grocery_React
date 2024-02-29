import React from 'react'
import { Link } from 'react-router-dom'
import './ProductMenu.css'
import {groceries} from '../../Data/GroceriesData'

const Groceries = ({handleAddCart}) => {
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
                    <Link to={'/fruit'}>Fruits</Link>
                </div>
            </section>

            <section class="vegtable-content">
                <section class="left-side" id="left-btn">
                    <div class="left-title">
                        <p>Product Categories</p>
                        <button type="button" onClick={closeMenu}><i class="fa-solid fa-x"></i></button>
                    </div>
                    <div class="left-buttons">
                       <Link to={'/groceries/1'}>Organic Egg</Link>
                       <Link to={'/groceries/2'}>Turmeric Powder</Link>
                       <Link to={'/groceries/3'}>Red chilli Powder</Link>
                       <Link to={'/groceries/4'}>Coriender Leaf</Link>
                       <Link to={'/groceries/5'}>Curry Leaf</Link>
                       <Link to={'/groceries/6'}>Mentha spicata</Link>
                       <Link to={'/groceries/7'}>Ginger</Link>
                       <Link to={'/groceries/8'}>Fresh milk</Link>
                       <Link to={'/groceries/9'}>Green chilli</Link>
                       <Link to={'/groceries/10'}>Red chilli</Link>
                       <Link to={'/groceries/11'}>Curd</Link>
                       <Link to={'/groceries/12'}>Big salt</Link>
                       <Link to={'/groceries/13'}>small salt</Link>
                       <Link to={'/groceries/14'}>Sugar</Link>
                       <Link to={'/groceries/15'}>Brown sugar</Link>
                       <Link to={'/groceries/16'}>Jaggery</Link>
                       <Link to={'/groceries/17'}>Mushroom</Link>
                       <Link to={'/groceries/18'}>Panner</Link>
                       <Link to={'/groceries/19'}>Cheese</Link>
                       <Link to={'/groceries/20'}>Bread</Link>
                       <Link to={'/groceries/21'}>Jam</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Groceries</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.</p>
                    </div>
                    <div className="row-1">
                        {groceries.length > 0 ? (
                            groceries.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/groceries/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>grocery</p>
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

export default Groceries
