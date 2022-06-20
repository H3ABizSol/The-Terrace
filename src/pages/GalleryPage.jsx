import React from 'react'
import Crousel from '../component/GalleryPage/Crousel'
import thumbUp from '../image/thumbUp.png'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import ScrollToTop from './ScrollToTop';

const GalleryPage = () => {
  return (
  <>
    <div className='gallery' >
    <div className="container">
      <div className="title">GALLERY</div>
      <div className="box">
      <Crousel/>
      </div>
      <div className="bottom">
        <div className="top">
          <div className="image">
            <img src={thumbUp} alt="thumbUp" />
          </div>
          <div className="text">Good food means healthy lifestyle</div>
        </div>
        {/* <div className="down">
          <div className="text">If you want to contact us, please reach us out on our WhatsApp</div>
            <img src={whatapp} alt="whatapp" />
        </div> */}
      </div>
    </div>
    </div>
    <div className="gallery2">
        <div className="down2">
        <div className="down">
            <div className="text">If you want to contact us, please reach us out on our WhatsApp&nbsp; </div>
              {/* <AiOutlineWhatsApp style={{color:"green"}} /> */}
              <div className="whatsapp">
              <AiOutlineWhatsApp  />
              </div>
            </div>
      </div>
      <ScrollToTop/>

      </div>
    </>
  )
}

export default GalleryPage