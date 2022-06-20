import React from 'react'
import { ImLocation } from 'react-icons/im';
import { MdOutlineCall } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import contactImg from '../image/contactImg.png'
import ScrollToTop from './ScrollToTop';

const ContactUsPage = () => {
  return (
    <div className='contactUs' >
    <div className="container">
      <div className="title">Contact Us</div>
      <div className="top">
        <div className="left">
            <div className="subTitle">The Terrace</div>
            <div className="details">Donec vitae pharetra est. Sed vel euismod turpis, vitae scelerisque enim. Donec tincidunt lectus non tristique rhoncus. Sed convallis mi sed</div>
            <div className="right">
            {/* <iframe  title="H3A Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.478952628132!2d77.32708921503524!3d28.58540508243635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d69e744f73%3A0x6764c289e80fa07f!2sH3A%20Business%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1648039387326!5m2!1sen!2sus" width={"95%"} height={"95%"} style={{border:0}} allowfullscreen="" loading="lazy"/> */}
            <iframe className='map'  title="Terrace Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.210281507312!2d77.341191!3d28.6431691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf9811c51cee19ea!2sThe%20Terrace!5e0!3m2!1sen!2sin!4v1648098913358!5m2!1sen!2sin" allowFullScreen={true} loading="lazy"/>
            </div>
            <div className="info">
                <div className="address">
                    <div className="icon">
                    <ImLocation/>
                    </div>
                    <div className="text">
                        The Terrace Shopprix Mall Plot - 01 Sector - 05, Vaishali Rd, Sector 5, Vaishali, Ghaziabad, Uttar Pradesh 201010
                    </div>
                </div>
                <div className="phone">
                    <div className="icon">
                        <MdOutlineCall/>
                    </div>
                    <div className="text">
                        09910480551
                    </div>
                </div>
                <div className="email">
                    <div className="icon">
                        <FiMail/>
                    </div>
                    <div className="text">
                        theterrace123@gmail.com
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            {/* <iframe  title="H3A Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.478952628132!2d77.32708921503524!3d28.58540508243635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d69e744f73%3A0x6764c289e80fa07f!2sH3A%20Business%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1648039387326!5m2!1sen!2sus" width={"95%"} height={"95%"} style={{border:0}} allowfullscreen="" loading="lazy"/> */}
            <iframe className='map'  title="Terrace Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.210281507312!2d77.341191!3d28.6431691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf9811c51cee19ea!2sThe%20Terrace!5e0!3m2!1sen!2sin!4v1648098913358!5m2!1sen!2sin" allowFullScreen={true} loading="lazy"/>
        </div>
      </div>
      <div className="bottom">
            {/* <iframe  title="Terrace Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.210281507312!2d77.341191!3d28.6431691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf9811c51cee19ea!2sThe%20Terrace!5e0!3m2!1sen!2sin!4v1648098913358!5m2!1sen!2sin" width={500} height={300} style={{border:0}} allowfullscreen="" loading="lazy"/> */}
          <div className="left">
              <img src={contactImg} alt="contactImg" />
          </div>
          <div className="right">
            <form action="#">
                <label htmlFor='Name'>Name*</label>
                <input type="text" />
                <label htmlFor='Email'>E-Mail Address*</label>
                <input type="text" />
                <label htmlFor='Comment'>Comment*</label>
                <textarea cols="30" rows="8"/>
                <button>Submit</button>
            </form>
          </div>
      </div>
    </div>
    <ScrollToTop/>
    </div>
  )
}

export default ContactUsPage