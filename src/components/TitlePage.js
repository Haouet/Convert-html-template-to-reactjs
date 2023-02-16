import React from 'react'


// const FashionTitre = (props) => {

//    return (

//       <h2>{props.title}</h2>


//    )
// }
// const withLibrary = (WrappedComponent) => (props) => {

//    return (<WrappedComponent {...props} />)
// }

// const FashionComponent = withLibrary(FashionTitre)


function TitlePage({children}) {


   return (
      <>
         <div class="blue_bg">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <div class="titlepage">
                        {children}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>

   )
}

export default TitlePage