import React from 'react'
import underwear from './assets/images/underwear.png'
import pent from './assets/images/pent.png'
import shoes from './assets/images/shoes.png'
import t_shart from './assets/images/t_shart.png'
import jakit from './assets/images/jakit.png'
import helbet from './assets/images/helbet.png'
import './assets/css/SixBox.css'
const SixBox = () => {
  return (
    <div className="container-fluid">
    <div className="row">
       <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx yellow_bg">
             <i><img src={shoes} alt="#"/></i>
             <span>Shoes</span>
          </div>
       </div>
       <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx bluedark_bg">
             <i><img src={underwear} alt="#"/></i>
             <span>underwear</span>
          </div>
       </div>
       <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx yellow_bg">
             <i><img src={pent} alt="#"/></i>
             <span>Pante & socks</span>
          </div>
       </div>
       <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx bluedark_bg">
             <i><img src={t_shart} alt="#"/></i>
             <span>T-shirt & tankstop</span>
          </div>
       </div>
       <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx yellow_bg">
             <i><img src={jakit} alt="#"/></i>
             <span>cardigans & jumpers</span>
          </div>
       </div>
       <div className="col-md-2 col-sm-4 pa_left">
          <div className="six_probpx bluedark_bg">
             <i><img src={helbet} alt="#"/></i>
             <span>Top & hat</span>
          </div>
       </div>
    </div>
 </div>
  )
}

export default SixBox