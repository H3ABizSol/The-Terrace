import React from 'react'
import Crousel from '../component/HomePage/Crousel'
import Intro from '../component/HomePage/Intro'
import Menu from '../component/HomePage/Menu'
import SignatureDish from '../component/HomePage/SignatureDish'
import Welcome from '../component/HomePage/Welcome'
import ScrollToTop from './ScrollToTop'

const Homepage = () => {

  return (
   <div className='homePage' >
   <Intro/>
   <Welcome/>
   <Menu/>
   <Crousel/>
   <SignatureDish/>
   <div className="queriesMail">
     <div className="text">For any queries, mail us at theterrace123@gmail.com</div>
    </div>
    <ScrollToTop/>
   </div>
  )
}

export default Homepage