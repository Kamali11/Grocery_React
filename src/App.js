import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Product_Vegtable from "./Components/Product_Details/Product_Vegtable";
import Blog from "./Pages/Blog/Blog";
import Vegtable from "./Pages/ProductMenu/Vegtable";
import Fruit from "./Pages/ProductMenu/Fruit";
import Menu from "./Pages/ShopMenu/Menu";
import Nuts from "./Pages/ProductMenu/Nuts";
import Juices from "./Pages/ProductMenu/Juices";
import Grains from "./Pages/ProductMenu/Grains";
import Icecream from "./Pages/ProductMenu/Icecream";
import Oils from "./Pages/ProductMenu/Oils";
import Frozenfood from "./Pages/ProductMenu/Frozenfood";
import Snacks from "./Pages/ProductMenu/Snacks";
import Groceries from "./Pages/ProductMenu/Groceries";
import Product_Fruit from "./Components/Product_Details/Product_Fruit";
import Product_Nuts from "./Components/Product_Details/Product_Nuts";
import Product_Juices from "./Components/Product_Details/Product_Juices";
import Product_Icecreams from "./Components/Product_Details/Product_Icecreams";
import Product_Grains from "./Components/Product_Details/Product_Grains";
import Product_Oils from "./Components/Product_Details/Product_Oils";
import Product_Frozenfoods from "./Components/Product_Details/Product_Frozenfoods";
import Products_Snacks from "./Components/Product_Details/Products_Snacks";
import Product_Groceries from "./Components/Product_Details/Product_Groceries";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import StoreLocation from "./Pages/StoreLocation/StoreLocation";
import TopDeals from "./Pages/TopDeals/TopDeals";
import NewArrivals from "./Pages/NewArrivals/NewArrivals";
import Products from "./Pages/Products/Products";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import toast from "react-hot-toast";






function App() {
  const [cart,setCart]=useState([])
  const[wish,setWish]=useState([])


  const [addCart, setAddCart] = useState([])
  const handleAddCart = (para) =>{
     setAddCart([...addCart,para])
      toast.success('Product Added Successfully')
     localStorage.setItem('addCart' , JSON.stringify(addCart))

     let isPresent=false;
     cart.forEach((product)=>{
      if (para.id=== product.id)
      isPresent=true
     })
     if (isPresent)
     return;
    setCart([...cart,para])
  }


  return (
    <>
    <Navbar id="navbar" size={cart.length} wish={wish.length}/>  
        <Routes>
          <Route index element={<Home />} />
          <Route path="/vegtables" element={<Vegtable handleAddCart={handleAddCart}/>}/>
          <Route path="/fruits" element={<Fruit handleAddCart={handleAddCart}/>}/>
          <Route path="/nuts" element={<Nuts  handleAddCart={handleAddCart}/>}/>
          <Route path="/juices" element={<Juices  handleAddCart={handleAddCart}/>}/>
          <Route path="/grains" element={<Grains  handleAddCart={handleAddCart}/>}/>
          <Route path="/icecreams" element={<Icecream  handleAddCart={handleAddCart}/>}/>
          <Route path="/oils" element={<Oils  handleAddCart={handleAddCart}/>}/>
          <Route path="/frozenfoods" element={<Frozenfood  handleAddCart={handleAddCart}/>}/>
          <Route path="/snacks" element={<Snacks  handleAddCart={handleAddCart}/>}/>
          <Route path="/groceries" element={<Groceries  handleAddCart={handleAddCart}/>}/>
          <Route path="/menu" element={<Menu handleAddCart={handleAddCart}/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/trackorder" element={<TrackOrder/>}/>
         <Route path="/storelocation" element={<StoreLocation/>}/>
         <Route path="/topdeals" element={<TopDeals  handleAddCart={handleAddCart}/>}/>
         <Route path="/newarrivals" element={<NewArrivals  handleAddCart={handleAddCart}/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/cart" element={<Cart/>}/>
         {/* <Route path="/carousel" element={<Carousel/>}/> */}
    

          {/* Params Based Router */}
          <Route path="/vegtable/:id" element={<Product_Vegtable/>}/>
          <Route path="/fruits/:id" element={<Product_Fruit/>}/>
          <Route path="/nuts/:id" element={<Product_Nuts/>}/>
          <Route path="/juices/:id" element={<Product_Juices/>}/>
          <Route path="/grains/:id" element={<Product_Grains/>}/>
          <Route path="/icecreams/:id" element={<Product_Icecreams/>}/>
          <Route path="/oils/:id" element={<Product_Oils/>}/>
          <Route path="/frozenfoods/:id" element={<Product_Frozenfoods/>}/>
          <Route path="/snacks/:id" element={<Products_Snacks/>}/>
          <Route path="/groceries/:id" element={<Product_Groceries/>}/>
          {/* <Route path="/topdeal/:id" element={<ProductDetails/>}/> */}
        </Routes>
        <Footer size={cart.length} wish={wish.length}/>
    </>
  );
}

export default App;
