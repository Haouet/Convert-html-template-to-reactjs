// import './assets/css/Project.css'
import './assets/css/Project.css'
import data from "../../data/Data.json"
import Product from './Product'
import {  useState } from 'react';
const Project = () => {

   const Products = data;
   const [listProducts, setList] = useState(Products);
   console.log(listProducts);

   return (
      <>
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="titlepage">
                  <h2>Featured Products</h2>
               </div>
            </div>
         </div>
      </div>
         <div className="container">   
             <div className="product_main">
                  <div className='row'>              
                     {listProducts?.map(item => (                     
                        <div className="col-md-3" >                        
                        <Product key={item.id} {...item} />
                         </div>
                      
                     ))}
                  </div>
              </div>
               <div >
                  <a className="read_more" href="#">See More</a>
               </div>
            </div>
            </> 
       
     
   )
}

export default Project