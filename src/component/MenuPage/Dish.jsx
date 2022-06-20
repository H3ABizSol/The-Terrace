import React from 'react'
import spoonFork from '../../image/spoonFork2.png'
import { MdOutlineFastfood } from 'react-icons/md';

const Dish = ({type,title}) => {
  return (
    <div className="box" id={title}>
        <div className="menuTitle">
            <div className="text">
              <div className="icon"><MdOutlineFastfood/></div>
              {title}
            </div>
        </div>
        <div className="menubox">
          <div className="image">
        <img src={spoonFork} alt="spoonFork" className='spoonFork'/>
          </div>
          {React.Children.toArray(
            type.data.map((elm , i)=>{
              if (i % 2 === 0 ){
                return(
                  <div className="item">
                  <div className="upper">
                  <div className="dishname">{elm.title}</div>
                  <div className="price"> ............................Rs. <span> {elm.price}</span></div>
                  </div>
                  <div className="lower">
                    <div className="varieties">{elm.varieties}</div>
                    <div className="extra">{elm.extra}</div>
                  </div>
                  </div>
                )
              }
              return(
                <div></div>
              )
            })
          )}
        </div>
        <div className="menubox">
        <div className="image">
        <img src={spoonFork} alt="spoonFork" className='spoonFork'/>
          </div>
          {React.Children.toArray(
            type.data.map((elm ,i)=>{
              if (i % 2 !== 0 ){
              return(
                <div className="item">
                <div className="upper">
                <div className="dishname">{elm.title}</div>
                <div className="price"> ................................Rs. <span> {elm.price}</span></div>
                </div>
                <div className="lower">
                  <div className="varieties">{elm.varieties}</div>
                  <div className="extra">{elm.extra}</div>
                </div>
                </div>
              )
            }else{
              return(
                <div></div>
              )
            }
            })

          )}
        </div>
      </div>
  )
}

export default Dish