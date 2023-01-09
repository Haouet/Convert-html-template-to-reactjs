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
     <div className="blue_bg">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Products</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div classNameName="row">
    <div classNameName="product_main">             
    
             {listProducts?.map(item => (
                
                <div classNameName='project_box'>   
                <div classNameName="col-xs-3" >                        
                <Product key={item.id} {...item} />
                 </div>  </div>
              
             ))}
      
      </div>
       <div classNameName="col-md-12">
          <a classNameName="read_more" href="#">See More</a>
       </div>
   
 </div>
 </>
  )
}

export default ProductPage