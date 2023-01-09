import React from 'react'
import './assets/css/ContactPage.css'
function ContactPage() {
  return (
    <>
    <div className="blue_bg">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
      <div id="contact" className="contact">
         <div className="con_bg">
            <div className="container">
               <div className="row">
                  <div className="col-md-10 offset-md-1">
                     <form id="request" className="main_form">
                        <div className="row">
                           <div className="col-md-6 col-sm-6">
                              <input className="contactus" placeholder="Name" type="type" name="name"/> 
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <input className="contactus" placeholder="Phone Number" type="type" name="phoneNumber"/> 
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <input className="contactus" placeholder="Email" type="type" name="email"/>                          
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <input className="contactus" placeholder="Address" type="type" name="address"/>                          
                           </div>
                           <div className="col-md-12">
                              <input className="contactusmess" placeholder="Message" type="type" Message="message"/>
                           </div>
                           <div className="col-md-12">
                              <button className="send_btn">Send</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default ContactPage