import React from 'react'
import { CgCheckO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
const ThankYou = () => {
  return (
    <div className='thankYou' >
    <div className="container">
      <div className="icon"><CgCheckO/></div>
      <div className="title">Thankyou! You will get a confirmation mail shortly.</div>
      <Link to="/">
      <button>Done</button>
      </Link>
      </div>
    <ScrollToTop/>
    </div>
  )
}

export default ThankYou