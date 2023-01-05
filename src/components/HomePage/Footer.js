import { useState, useEffect } from 'react';
import './assets/css/Footer.css'
import FooterItem from './FooterItem'
import FooterItems from "../../data/Footer.json"
function Footer() {
   const Items = FooterItems;
   const [listItems, setList] = useState(Items);
   console.log(listItems);
   useEffect(() => {
      const data = listItems;
      setList(data);

   }, []);
   const date = new Date();
   const année = date.getFullYear();
   return (
      <>
         <div className="container">
            <div className="row">
               {listItems?.map(item => (
                  <FooterItem key={item.id} {...item} />

               ))}
            </div>
         </div>
         <div className='copyright'>
            <div className='container'>
               <div className="row">
                  <div className="col-md-12">
                     <p>© {année} All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer