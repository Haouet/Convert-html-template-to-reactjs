import React from 'react'

const Product = ({id,title,img,price,desc}) => {
  return ( 
  
  <>
  <div className="dark_white_bg" ><img  src={`${img}`} alt={desc}/></div>
  <h3>{title}</h3>
  <h3>${price} </h3>
  <button className='addCart'>Add to Cart</button>
  
</>
  )
}

export default Product