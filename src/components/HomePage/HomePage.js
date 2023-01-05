

import BannerMain from './BannerMain';
import SixBox from './SixBox';
import Project from './Project';
import Fashion from './Fashion';
import News from './News';
import Newslatter from './Newslatter';
import ThreeBox from './ThreeBox';


function HomePage() {
 
  return (
    <>     

    
       <div className='banner_main'>
        <BannerMain/>
         </div>
         <div className="six_box">
          <SixBox/>
         </div>
         <div id="project" className='project'>
          <Project />
         </div>
         <Fashion/>
         <div className='news'>
          <News/>
         </div>
         <div className='newslatter'>
          <Newslatter/>
         </div>
         
         
    </>
  );
}

export default HomePage;
