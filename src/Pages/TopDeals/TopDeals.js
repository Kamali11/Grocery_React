import React from 'react'
import { Link } from 'react-router-dom'
import './TopDeals.css'

import { deals } from '../../Data/TopDealsData'


// `/vegtable/${item.id}`


const TopDeals = () => {
  return (
    <div>
      <p className='deals-title'>Top Deals</p>

      <div className="row-1">
                        {deals.length > 0 ? (
                            deals.map((item, id) => {
                                return (
                                    <div className="deals" key={id}>
                                        <Link to={item.Path}><img src={item.img} alt='...' />
                                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>{item.items}</p>
                                            <p className="tle-veg">{item.product_name}</p>

                                            <div className="adding">
                                                <p className="price" style={{ color: "rgb(207, 8, 108)" }}>MRP {item.mrp}</p>
                                                <Link><i className="fa-solid fa-cart-arrow-down"></i>Add</Link>
                                            </div>
                                            <div className="offer">
                                                {item.offer ? (
                                                    <p><i>Offer {item.offer_presentage}</i></p>
                                                ) : ''}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })) : 'Data Not Found'}

                    </div>
    </div>
  )
}

export default TopDeals