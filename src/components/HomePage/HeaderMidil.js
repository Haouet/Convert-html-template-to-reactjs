import React from 'react'
import {Link} from "react-router-dom";
import email from './assets/images/email.png'
import logo from './assets/images/logo.png'
import shopping from './assets/images/shopping.png'

const HeaderMidil = () => {
  return (
    
               <div className='container'>
                  <div className="row d_flex">
                     <div className="col-md-4">
                        <ul className="conta_icon d_none1">
                           <li><a href="#"><img src={email} alt="#"/> taherhaouet@gmail.com</a> </li>
                        </ul>
                     </div>
                     <div className="col-md-4">
                     <Link to={`/`} className="logo" href="#"><img src={logo} alt="#"/></Link>
                     </div>
                     <div className="col-md-4">
                        <ul className="right_icon d_none1">
                           <li><a href="#"><img src={shopping} alt="#"/></a> </li>
                           <a href="#" className="order">Order Now</a> 
                        </ul>
                     </div>
                  </div>
               </div>
           
  )
}

export default HeaderMidil