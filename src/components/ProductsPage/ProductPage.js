import React from 'react'
import Product from '../HomePage/Product'
import './assets/css/Project.css'
import data from "../../data/Data.json"
import {useState } from 'react';
function ProductPage() {
   const Products = data;
   const [listProducts, setList] = useState(Products);
   console.log(listProducts);
  return (
    <>
     <div class="blue_bg">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Products</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div className="row">
    <div className="product_main">              
    
             {listProducts?.map(item => (
                
                <div className='project_box'>   
                <div className="col-xs-3" >                        
                <Product key={item.id} {...item} />
                 </div>  </div>
              
             ))}
      
      </div>
       <div className="col-md-12">
          <a className="read_more" href="#">See More</a>
       </div>
   
 </div>
 </>
  )
}

export default ProductPage