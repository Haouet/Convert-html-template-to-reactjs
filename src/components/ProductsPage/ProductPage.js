import Product from '../HomePage/Product'
import './assets/css/products.css'
import data from "../../data/Data.json";
import TitlePage from '../TitlePage'
import {useState } from 'react';
function ProductPage() {
   const Products = data;
   const [listProducts, setList] = useState(Products);
   console.log(listProducts);
  return (
   <>
     <TitlePage>
      <h2>Product</h2>
      </TitlePage>
   <div className="container">
   
            <div className="product_main">              
            
            {listProducts?.map(item => ( 
                
                <div className='project_box'>   
                <div className="col-xs-3" >                       
                <Product key={item.id} {...item} />
                 </div> 
                 </div> ))} 
              
              </div>
               <div className="col-md-12">
                  <a className="read_more" href="#">See More</a>
               </div>
           
        

 </div>
 </>
  )
}

export default ProductPage