import { useState, useEffect } from 'react';
import './assets/css/ThreeBox.css'
import ThreeBoxItem from './ThreeBoxItem'
import Box from "../../data/ThreeBox.json"

function ThreeBox() {
   const Boxs = Box;
   const [listBoxs, setList] = useState(Boxs);
   console.log(listBoxs);
   useEffect(() => {
      const data = listBoxs;
      setList(data);

   }, []);
   return (
      <div className="container">
         <div className="row">
            {listBoxs?.map(item => (
               <ThreeBoxItem key={item.id} {...item} />

            ))}
         </div>
      </div>
   )
}

export default ThreeBox