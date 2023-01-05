import React from 'react'
import './assets/css/Header.css'
import call from "./assets/images/call.png";
const TopHeader = () => {
  return (
   
    
            <div className="header_top d_none1">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                        <ul className="conta_icon">
                           <li><a href="#"><img src={call} alt="#"/>Call us: +216 52 928 451</a> </li>
                        </ul>
                     </div>
                     <div className="col-md-4">
                        <ul className="social_icon">
                           <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                           </li>
                           <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                           <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="col-md-4">
                        <div className="se_fonr1">
                           <form action="#" >
                              <div className="select-box">
                                 <label htmlFor="select-box1" className="label select-box1"><span className="label-desc">English</span> </label>
                                 <select id="select-box1" className="select">
                                    <option value="Choice 1">English</option>
                                    <option value="Choice 1">Falkla</option>
                                    <option value="Choice 2">Germa</option>
                                    <option value="Choice 3">Neverl</option>
                                 </select>
                              </div>
                           </form>
                           <span className="time_o"> Open hour: 8.00 - 18.00</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           
         
  
  )
}

export default TopHeader