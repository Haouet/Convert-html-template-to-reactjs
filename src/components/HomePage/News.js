import './assets/css/News.css'
import NewsItem from './NewsItem'
import news from "../../data/News.json"
import { useState,useEffect } from 'react';

const News = () => {
   const News = news;
   const [listNews, setList] = useState(News);
   console.log(listNews);
   useEffect(() => {
      const data = listNews;
      setList(data);
      
  }, []);  
  return (
    
     
         <div className='container'>
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Letest News</h2>
                  </div>
               </div>
            </div>
            <div className="row">
            {listNews?.map(item => (                                               
                       
                        <NewsItem key={item.id} {...item} />
                      
                      
                     ))}
              
            </div>
        </div>
  )
}

export default News