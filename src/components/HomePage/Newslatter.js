
import './assets/css/Newslatter.css'
const Newslatter = () => {
  return (
    <div className="container">
            <div className="row d_flex">
               <div className="col-md-5">
                  <h3 className="neslatter">Subscribe To The Newsletter</h3>
               </div>
               <div className="col-md-7">
                  <form className="news_form">
                     <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email" />
                     <button className="sumbit">Subscribe</button>
                  </form>
               </div>
            </div>
         </div>
  )
}

export default Newslatter