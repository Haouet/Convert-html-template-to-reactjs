import { useState,useEffect } from 'react';
import news from "../../data/News.json"
import NewsItem from '../HomePage/NewsItem';
function NewsPage() {
  const News = news;
  const [listNews, setList] = useState(News);
  console.log(listNews);
  useEffect(() => {
     const data = listNews;
     setList(data);
     
 }, []);  
  return (
    <>
    <div className="blue_bg">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Letest News</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    
      <div className="news">
         <div className="container">
            <div className="row">
            {listNews?.map(item => (                                               
                       
                       <NewsItem key={item.id} {...item} />
                     
                     
                    ))}
              </div>
         </div>
      </div>
    </>
  )
}

export default NewsPage