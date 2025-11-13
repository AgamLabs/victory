import { Link } from 'react-router-dom'
import CMS from '../../cms/content'

function AboutFour() {
   return (
         <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src={CMS.about.images.main1} alt="About" />
                     </div>
                     <div className="img2">
                        <img src={CMS.about.images.main2} alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src={CMS.about.images.main3} alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           {CMS.about.heading}
                        </h2>
                     </div>
                     <p className="pe-xl-5">{CMS.about.intro1}</p>
                     <p className="mb-30 pe-xl-5">{CMS.about.intro2}</p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src={CMS.about.bullets[0].icon} alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">{CMS.about.bullets[0].title}</h5>
                              <p className="about-item_text">{CMS.about.bullets[0].text}</p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src={CMS.about.bullets[1].icon} alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">{CMS.about.bullets[1].title}</h5>
                              <p className="about-item_text">{CMS.about.bullets[1].text}</p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src={CMS.about.bullets[2].icon} alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">{CMS.about.bullets[2].title}</h5>
                              <p className="about-item_text">{CMS.about.bullets[2].text}</p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link to={CMS.about.cta.href} className="th-btn style3 th-icon">
                           {CMS.about.cta.text}
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
