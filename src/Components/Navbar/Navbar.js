import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Home from '../Pages/Home/Home'
import img from '../../assets/logo-removebg.png'

const Navbar = ({size, wish}) => {

    // const HandleSideBar = () =>{
    //     const id = document.getElementById('logo')

    //     id.classList.toggle('d-none')
    // }

     const openIcon=()=>{
        const icon=document.getElementById('iconMenu')
        icon.style.width='20%'
     }
     const closeIcon=()=>{
        const icon=document.getElementById('iconMenu')
        icon.style.width='0'
     }

     const mobileOpenIcon=()=>{
        const icon1=document.getElementById('mblSide')
        icon1.style.width='100%'
     }
     const mobileCloseIcon=()=>{
        const icn=document.getElementById('mblSide')
        icn.style.width='0'
     }
    

     const [activeSection, setActiveSection]=useState('section1')
     const clicked=(section)=>{
         setActiveSection(section);
     }
     
    return (
        <nav>
            <div id="header-1">
                <div className="iconsbar">
                    <Link><i className="fa-brands fa-facebook"></i></Link>
                    <Link><i className="fa-brands fa-google"></i></Link>
                    <Link><i className="fa-brands fa-instagram"></i></Link>
                    <Link><i className="fa-brands fa-pinterest"></i></Link>
                </div>

                <div className="delivery">
                    <div className="track">
                        <Link to={'/trackorder'}><i className="fa-solid fa-truck-fast"></i>Track Your Order</Link>

                    </div>
                    <p>|</p>
                    <div className="store">
                        <Link to={'/storelocation'}><i className="fa-solid fa-location-dot"></i>Store Location</Link>

                    </div>
                    <p>|</p>
                    <div className="language">
                        <li className="lang"><Link> Language</Link>
                            <ul className="drop-down">
                                <li>English</li>
                             </ul>
                        </li>
                    </div>
                </div>
            </div>

            <div id="header-2" >
                <div className="head">
                    <div className="title">
                           <div>
                            <Link className='sideBar' onClick={openIcon} id='sideIcon'>
                             <i class="fa-solid fa-bars"></i>
                            </Link>
                            <Link className='mobileBar' onClick={mobileOpenIcon} id='mobileIcon'>
                            <i class="fa-solid fa-bars-staggered"></i>
                            </Link>
                           </div>
                    </div>
                    <div className='logo' id='logo'>
                            <img src={img} alt='img' />
                        </div>
                    <div className="search-bar" id="search">
                        <button type="button"><i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search products here..." /></button>
                    </div>
                    <div className="search-bar-mobileview">
                        <button type="button"><Link><i
                            className="fa-solid fa-magnifying-glass"></i></Link> </button>
                    </div>
                   
                    <div className="heart-icon">
                        <i className="fa-regular fa-heart"></i>
                        <span className='countvalue'>{wish}</span>
                    </div>
                    <Link className="purchase-icon" to={'/cart'}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className='countvalue'>{size}</span>
                    </Link>
                    <div className="register">
                        <Link to={'/trackorder'}>
                            <i className="fa-solid fa-user"></i>
                      </Link>
                    </div>
                </div>
            </div>
            <div  className='nav-menu' id="nav-bar">
                <ul className="navication" >
                    <li><Link to={"/"}>HOME </Link></li>
                    <li className="dropdown"><Link>SHOP <i className="fa-solid fa-caret-down"></i></Link>
                        <div className="dropdown-content">
                            <Link to={'/vegtables'}>Vegetables</Link>
                            <Link to={'/fruits'}>Fruits</Link>
                            <Link to={'/nuts'}>Nuts</Link>
                            <Link to={'/juices'}>Juices</Link>
                            <Link to={'/grains'}>Grains</Link>
                            <Link to={'/icecreams'}>Ice creams</Link>
                            <Link to={'/oils'}>Oils</Link>
                            <Link to={'/frozenfoods'}>Frozen Foods</Link>
                            <Link to={'/snacks'}>Snacks</Link>
                            <Link to={'/groceries'}>Others</Link>
                        </div>
                    </li>
                    <li className='dropdown-1'><Link to={'/products'}>PRODUCT <i className="fa-solid fa-caret-down"></i></Link>
                        <div className="dropdown-content-1">
                            <Link to={'/topdeals'}>Top deals</Link>
                            <Link to={'/newarrivals'}>New Arrivals</Link>
                            <Link to={'/offers'}>Offers</Link>
                            <Link to={'/special'}>Special</Link>
                        </div>
                    </li>
                    <li><Link>PAGES</Link></li>
                    <li><Link to={'/blog'}>BLOG</Link></li>
                </ul>
                <div className="call">
                    <i className="fa-solid fa-phone-volume"></i>
                    <p>Call Us: +91 1234567890</p>
                </div>
            </div>
            
            <section class="side-icon-bar" id="iconMenu">
            <div class="side-title">
                <p>Shop by Catagory</p>
                <button type="button" onClick={closeIcon}> <i class="fa-solid fa-x"></i></button>
            </div>
            <ul class="menu-title">
                <li><Link to={'/vegtables'}>Vegetables</Link></li>
                <li><Link to={'/fruits'}>Fruits</Link></li>
                <li><Link to={'/nuts'}>Nuts</Link></li>
                <li><Link to={'/juices'}>Juices</Link></li>
                <li><Link to={'/grains'}>Grains</Link></li>
                <li><Link to={'/icecreams'}>Ice creams</Link></li>
                <li><Link to={'/oils'}>Oils</Link></li>
                <li><Link to={'/frozenfoods'}>Frozen Foods</Link></li>
                <li><Link to={'/snacks'}>Snacks</Link></li>
                <li><Link to={'/groceries'}>Other Groceries</Link></li>
            </ul>
        </section>

            <div className="mbl-side-bar" id='mblSide'>
                <div className="mbl-view">
                    <div className="wlcome">
                        <p>Welcome E Kart!! <i style={{color: 'rgb(235, 232, 20)'}} className="fa-solid fa-face-grin-hearts"></i>
                        </p>
                        <button type="button" onClick={mobileCloseIcon}><i className="fa-solid fa-x"></i></button>
                    </div>
                    <div className='store'>
                        <Link  to={'/trackorder'} onClick={mobileCloseIcon} className='track'>Track Order</Link>
                        <p>|</p>
                        <Link to={'/storelocation'} onClick={mobileCloseIcon}>Store Location</Link>
                    </div>
                    <div className='catagory-btn'>
                        <button  onClick={()=> clicked('section1')}>Menu</button>
                        <button  onClick={()=> clicked('section2')}>Catagories</button>
                    </div>
                    <div id='cards'>
                       <ul className='menu-content' style={{display: activeSection === 'section1' ? 'block' : 'none'}}>
                         <li><Link to={'/'} onClick={mobileCloseIcon}><p className='icontitle'><i class="fa-solid fa-house"></i>Home </p><i class="fa-solid fa-angle-right"></i></Link></li> 
                         <li><Link to={'/menu'} onClick={mobileCloseIcon}><p className='icontitle'><i class="fa-solid fa-shop"></i>Shop</p> <i class="fa-solid fa-angle-right"></i></Link></li>     
                         <li><Link to={'/products'} onClick={mobileCloseIcon}><p className='icontitle'><i class="fa-brands fa-product-hunt"></i>Products</p> <i class="fa-solid fa-angle-right"></i></Link></li>  
                         <li><Link to={'/pages'} onClick={mobileCloseIcon}><p className='icontitle'><i class="fa-brands fa-page4"></i>Pages</p> <i class="fa-solid fa-angle-right"></i></Link></li>  
                         <li><Link to={'/blog'} onClick={mobileCloseIcon}><p className='icontitle'><i class="fa-brands fa-blogger"></i>Blogs</p> <i class="fa-solid fa-angle-right"></i></Link></li>  
                       </ul>
                       <ul className='menu-content'  style={{display: activeSection === 'section2' ? 'block' : 'none'}}>
                         <li><Link to={'/vegtables'} onClick={mobileCloseIcon}>Vegetables <i class="fa-solid fa-angle-right"></i></Link></li> 
                         <li><Link to={'/fruits'} onClick={mobileCloseIcon}>Fruits <i class="fa-solid fa-angle-right"></i></Link></li>     
                         <li><Link to={'/nuts'} onClick={mobileCloseIcon}>Nuts <i class="fa-solid fa-angle-right"></i></Link></li>  
                         <li><Link to={'/juices'} onClick={mobileCloseIcon}>Juices <i class="fa-solid fa-angle-right"></i></Link></li>  
                         <li><Link to={'/grains'} onClick={mobileCloseIcon}>Grains <i class="fa-solid fa-angle-right"></i></Link></li> 
                         <li><Link to={'/icecreams'} onClick={mobileCloseIcon}>Icecreams <i class="fa-solid fa-angle-right"></i></Link></li>  
                         <li><Link to={'/oils'} onClick={mobileCloseIcon}>Oils <i class="fa-solid fa-angle-right"></i></Link></li> 
                         <li><Link to={'/frozenfoods'} onClick={mobileCloseIcon}>Frozenfoods <i class="fa-solid fa-angle-right"></i></Link></li> 
                         <li><Link to={'/snacks'} onClick={mobileCloseIcon}>Snacks <i class="fa-solid fa-angle-right"></i></Link></li>   
                         <li><Link to={'/groceries'} onClick={mobileCloseIcon}>Groceries <i class="fa-solid fa-angle-right"></i></Link></li> 
                       </ul>
                       <div className='contact'>
                          <p>Call us : 0123456789</p>
                       </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
