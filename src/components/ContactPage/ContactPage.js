import { useEffect, useState } from 'react';
import './assets/css/ContactPage.css'
function ContactPage() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmi = (e) => {
    e.preventDefault();                        
      const sendEmail =  {
           name,
           phoneNumber,
           email,
           message,
           address
           
         }
         
       
         console.log(sendEmail);            

    
}

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
                      <input className="contactus" placeholder="Name" type="text" label="name"
                        onChange={(e) => {
                          setName(e.target.value)
                        }} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input className="contactus" placeholder="Phone Number" type="text" label="phoneNumber"
                        onChange={(e) => {
                          setPhoneNumber(e.target.value)
                        }} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input type="email" className="contactus" label="email" placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input className="contactus" placeholder="Address" type="text" label="address"
                        onChange={(e) => {
                          setAddress(e.target.value)
                        }}
                      />
                    </div>
                    <div className="col-md-12">
                      <input className="contactusmess" placeholder="Message" type="text" label="message"
                        onChange={(e) => {
                          setMessage(e.target.value)
                        }}
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn" onClick={ handleSubmi
                      }>Send</button>
                    
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