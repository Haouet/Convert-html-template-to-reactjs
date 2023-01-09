
import  { useEffect, useState } from 'react'
import './App.css';
import { Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import HeaderBottom from './components/HomePage/HeaderBottom';
import HeaderMidil from './components/HomePage/HeaderMidil';
import Loader from './components/HomePage/Loader';
import TopHeader from './components/HomePage/TopHeader';
import About from './components/AboutPage/About';
import Footer from './components/HomePage/Footer';
import ThreeBox from './components/HomePage/ThreeBox'
import ProductPage from './components/ProductsPage/ProductPage';
import ContactPage from './components/ContactPage/ContactPage';
import NewsPage from './components/NewsPge/NewsPage';
import Error from './Error';
import FashionPage from './components/FashionPage/FashionPage';

function App() {
  const [loading, setLoading] = useState(true);  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 3000);
    return () => clearTimeout(timer);
      
}, []);  
  
  return (
    <>   
        {loading && <div><Loader/> </div>} 
      {!loading  && (
        <>
      <div className="header">
      <TopHeader />
      </div>
      <div className='header_midil'>
      <HeaderMidil/>
       </div>
       <div className='header_bottom'> 
       <HeaderBottom />
       </div>  
      
      <Routes>
                <Route exact path="/" element={<HomePage />} />
                {/* <Route exact path="/category/:name" element={} />
                <Route path="/contact" element={} />
                <Route path="/card" element={} />
                <Route path="/shop" element={} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/details/:id" element={<Deatils />} />
                <Route path="/checkout" element={<Checkout />} />
                
                <Route path="/back/addproduct" element={<AddProduct/>} /> */}
                <Route path="/about" element={<About/>} />               
                <Route path="/products" element={<ProductPage/>} />
                <Route path="/fashion" element={<FashionPage/>} />
                <Route path="/news" element={<NewsPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="*" element={<Error />} />
     </Routes>
     <div className='three_box'> 
         <ThreeBox/>
         </div>
     <div className='footer'>
       <Footer />
         </div>
        
     </>
     )}
    </>
  );
}

export default App;
