import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/img/normal/about_3_1.jpg" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/normal/about_3_2.jpg" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/img/normal/about_3_3.jpg" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Welcome To Victory DMC</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           Thailand's Premier Destination Management Company
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                        What sets us apart is our focus on designing travel experiences that truly stand out. Whether you want to explore Thailand's rich culture, embark on thrilling adventures, or something in between, we tailor every itinerary to bring authenticity, excitement, and flawless execution to your trip.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        We understand that no two clients are the same. We avoid one-size-fits-all trips — because every traveller is different. We take the time to understand your needs and craft itineraries that truly matter. Choose Victory DMC — let's turn your travel plans into amazing experiences you'll never forget.
                     </p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Group Tours & Activities</h5>
                              <p className="about-item_text">
                                 From corporate incentive programs to personalised leisure journeys or niche group tours, we handle every detail.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Hassle-Free Corporate Trips</h5>
                              <p className="about-item_text">
                                 We provide international travel agencies and corporations with innovative and reliable travel solutions in Thailand.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Local Knowledge</h5>
                              <p className="about-item_text">
                                 We leverage our extensive local knowledge and connections to create memorable experiences you'll remember for years to come.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link to="/contact" className="th-btn style3 th-icon">
                           Contact With Us
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
