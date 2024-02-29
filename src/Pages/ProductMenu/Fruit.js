import React from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

import { fruits } from "../../Data/FruitData";

const Fruit = ({handleAddCart}) => {
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
                        <Link>Apple</Link>
                        <Link>Banana</Link>
                        <Link>Black Current</Link>
                        <Link>Blue Berry</Link>
                        <Link>Boysenberry</Link>
                        <Link>Cucumber</Link>
                        <Link>Gooseberry</Link>
                        <Link>Grapes</Link>
                        <Link>Guava</Link>
                        <Link>Jack Fruit</Link>
                        <Link>Kiwi</Link>
                        <Link>Lemon</Link>
                        <Link>Mango</Link>
                        <Link>Orange</Link>
                        <Link>Papaya</Link>
                        <Link>Pear</Link>
                        <Link>Pine apple</Link>
                        <Link>Plum</Link>
                        <Link>Pomegranate</Link>
                        <Link>Stawberry</Link>
                        <Link>Watermelon</Link>
                    </div>
                </section>

                <section className="right-side">
                    <div className="tle-line">
                        <p className="right-tle">Fruits</p>
                        <button className='side-list' onClick={openMenu}><i class="fa-solid fa-list-ul"></i></button>
                    </div>
                    <div className="right-contet">
                        <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.</p>
                    </div>
                    <div className="row-1">
                        {fruits.length > 0 ? (
                            fruits.map((item, id) => {
                                return (
                                    <div className="card" key={id}>
                                        <Link to={`/fruits/${item.id}`}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>fruit</p>
                                            <p className="tle-veg">{item.product_name}</p>
                                        </Link>

                                            <div className="adding">
                                                <p className="price" style={{ color: "rgb(207, 8, 108)" }}>MRP {item.mrp}</p>
                                                <Link onClick={( ) =>handleAddCart(item)}><i className="fa-solid fa-cart-arrow-down"></i>Add</Link>
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

export default Fruit
