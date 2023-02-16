import { useState,useEffect } from 'react';
import news from "../../data/News.json"
import NewsItem from '../HomePage/NewsItem';
import TitlePage from '../TitlePage';
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
    <TitlePage>
      <h2>News</h2>
      </TitlePage>
    
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