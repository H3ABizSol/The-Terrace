import React from 'react'
import theTerrace from "../../image/theTerrace.png"
import left from "../../image/left.png"
import right from "../../image/right.png"
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="front">
      <div className="top">
      <div className="container">
        <div className="image">
        <img src={theTerrace}  alt="theTerrace" />
        </div>
        <div className="title">
        RESTRO - LOUNGE
        </div>
        <div className="opening">
          <div className="left">
            <img src={left}  alt="ok" />
          </div>
          <div className="middle">
            <div className="upperText">
              Opening Hours
            </div>
            <div className="lowerText">
              Monday-sunday (12:00pm - 11:30pm)
            </div>
          </div>
          <div className="right">
            <img src={right} alt="ok" />

          </div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="box">
      <div className="left">
        The fondest memories are made when gathered around the table.
      </div>
      <Link to="/sitting">
      <button>
        Book A Table Now
      </button>
      </Link>
      </div>
    </div>
  </div>
  )
}

export default Intro