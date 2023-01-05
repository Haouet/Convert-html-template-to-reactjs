import React from 'react'

function ThreeBoxItem({title,img}) {
  return (
    <div className="col-md-4">
                  <div className="gift_box">
                     <i><img src={img}/></i>
                     <span>{title}</span>
                  </div>
    </div>
  )
}

export default ThreeBoxItem