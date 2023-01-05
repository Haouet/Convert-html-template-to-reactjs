
import './assets/css/Loader.css'
import loader from "./assets/images/loading.gif";
const Loader = () => {
    
  return (
   
      <div className='loader_bg'>
        
         <div className='loader'><img src={loader} alt="#" /></div>
      </div>
   
  )
}

export default Loader