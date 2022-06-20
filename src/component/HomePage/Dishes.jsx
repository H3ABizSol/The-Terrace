import React from 'react'
import spoonFork from '../../image/spoonFork.png'
import { MdOutlineFastfood } from 'react-icons/md';

const Dishes = ({dishes}) => {

  return (
    <div className="dishes">
        <div className="mainTitle"> 
        <div className="icon"><MdOutlineFastfood/></div>
        <div className="text">{dishes.title}</div>
        </div>
        <div className="container">
          <img src={spoonFork} alt="spoonFork" className='spoonFork'/>
        { React.Children.toArray(
            dishes.data.map((elm)=>{
              return(
                  <div className="box">
                    <div className="upper">
                      <div className="title">{elm.title}</div>
                      <div className="money"> ................................Rs. {elm.price}</div>
                    </div>
                    <div className="lower">
                      <div className="varieties">{elm.varieties}</div>
                      <div className="extra">{elm.extra}</div>
                    </div>
                  </div>
              )
            })
          )
        }
        </div>
      </div>
  )
}

export default Dishes