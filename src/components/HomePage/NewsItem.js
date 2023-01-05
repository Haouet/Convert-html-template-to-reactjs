import React from 'react'

function NewsItem({title,img,text,Comment,date,Like}) {
  return (
    <div className="col-md-12 margin_top40">
    <div className="row d_flex">
       <div className="col-md-5">
          <div className="news_img">
             <figure><img src={img}/></figure>
          </div>
       </div>
       <div className="col-md-7">
          <div className="news_text">
             <h3>{title}</h3>
             <span>{date}</span> 
             <div className="date_like">
                <span>Like: {Like}</span><span className="pad_le">Comment: {Comment}</span>
             </div>
             <p>{text}</p>
          </div>
       </div>
    </div>
 </div>
  )
}

export default NewsItem