
import { useEffect, useState } from 'react';
import './assets/css/Newslatter.css'
const Newslatter = () => {
   const [email, setEmail] = useState('');
   const handleSubmi = (e) => {
      e.preventDefault();                        
        const sendEmail =  {            
             email        
             
           }      
         
           console.log("Email with Newslatter :" ,sendEmail);
  }
  return (
    <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <h3 className="neslatter">Subscribe To The Newsletter</h3>
               </div>
               <div className="col-md-7">
                  <form className="news_form">
                     <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email" 
                     onChange={(e) => {
                        setEmail(e.target.value)
                      }}/>
                     <button className="sumbit" onClick={ handleSubmi
                      }>Subscribe</button>
                  </form>
               </div>
            </div>
         </div>
  )
}

export default Newslatter