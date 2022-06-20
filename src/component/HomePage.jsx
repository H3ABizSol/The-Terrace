import React from 'react'
import Crousel from './HomePage/Crousel'
import Intro from './HomePage/Intro'
import Menu from './HomePage/Menu'
import SignatureDish from './HomePage/SignatureDish'
import Welcome from './HomePage/Welcome'

const Homepage = () => {

  return (
   <>
   <Intro/>
   <Welcome/>
   <Menu/>
   <Crousel/>
   <SignatureDish/>
   <div className="queriesMail">
     <div className="text">For any queries, mail us at theterrace123@gmail.com</div>
    </div>
   </>
  )
}

export default Homepage