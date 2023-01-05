import React from 'react'

function FooterItem({title,desc}) {
  return (
    <div className="col-md-3">
             <div className="inror_box">
                <h3>{title}</h3>
                <p>{desc}</p>
             </div>
          </div>
  )
}

export default FooterItem