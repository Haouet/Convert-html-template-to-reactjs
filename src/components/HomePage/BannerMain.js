import React from 'react'
import banner from './assets/images/ban_img.png'
import './assets/css/BannerMain.css'
const BannerMain = () => {
  return (
    <div className="container">
    <div className="row">
       <div className="col-md-8">
          <div className="text-bg">
             <h1> <span className="blodark"> Romofyi </span> <br/>Trands 2023</h1>
             <p>A huge fashion collection for ever </p>
             <a className="read_more" href="#">Shop now</a>
          </div>
       </div>
       <div className="col-md-4">
          <div className="ban_img">
             <figure><img src={banner} alt="#"/></figure>
          </div>
       </div>
    </div>
 </div>
  )
}

export default BannerMain