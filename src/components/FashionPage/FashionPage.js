import TitlePage from "../TitlePage";


function FashionPage() {
  return (
    <>
    {/* <div className="blue_bg">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     
                  </div>
               </div>
            </div>
         </div>
      </div> */}
      <TitlePage>
      <h2>Fashion</h2>
      </TitlePage>
      
      <div className="fashion">
         <img src="images/fashion.jpg" alt="#"/>
      </div>
    
    </>
  )
}

export default FashionPage