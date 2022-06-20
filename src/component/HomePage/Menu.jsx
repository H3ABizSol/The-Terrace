import React from 'react'
import burger from '../../image/glassBurger.svg'
import Dishes from './Dishes'
import { Link } from 'react-router-dom'
const Menu = () => {

  const popularDishes = {
    title:"Popular Dishes",
    data: [
    {
      title : "Spicy Fried Rice & Bacon",
      price : "650",
      varieties : "Bacon, Rice, Vegetables",
      extra : "(New)",
    },
    {
      title : "Fruit Vanilla Ice-cream",
      price : "200",
      varieties : "Ice-cream, Vanilla, Rum",
      extra : "",
    },
    {
      title : "Kung Pao Chicken",
      price : "890",
      varieties : "Peppers, Chicken, Peanuts",
      extra : "(Recommended)",
    },
    {
      title : "Chicken Doro Wat",
      price : "900",
      varieties : "Chicken, Ginger, Eggs",
      extra : "",
    },
    {
      title : "Masala Spiced Chickpeas",
      price : "180",
      varieties : "Chickpeas, Rice, Peppers",
      extra : "",
    },
    {
      title : "Mango Chilli Chutney",
      price : "220",
      varieties : "Chillies, Aromatic Spices",
      extra : "",
    },
    // {
    //   title : "Spicy",
    //   price : "650",
    //   varieties : "Bacon",
    //   extra : "",
    // },
    // {
    //   title : "Spicy",
    //   price : "650",
    //   varieties : "Bacon",
    //   extra : "",
    // },

  ]}

  const newDishes = {
    title:"New Dishes",
    data: [
    {
      title : "Chicken Doro Wat",
      price : "900",
      varieties : "Chicken, Ginger, Eggs",
      extra : "",
    },
    {
      title : "Masala Spiced Chickpeas",
      price : "180",
      varieties : "Chickpeas, Rice, Peppers",
      extra : "",
    },
    {
      title : "Mango Chilli Chutney",
      price : "220",
      varieties : "Chillies, Aromatic Spices",
      extra : "",
    },
    {
      title : "Chicken Doro Wat",
      price : "900",
      varieties : "BacChicken, Ginger, Eggson",
      extra : "",
    },
    {
      title : "Spicy Fried Rice & Bacon",
      price : "650",
      varieties : "Bacon, Rice, Vegetables",
      extra : "(New)",
    },
    {
      title : "Kung Pao Chicken",
      price : "890",
      varieties : "Peppers, Chicken, Peanuts",
      extra : "",
    },
    // {
    //   title : "Spicy",
    //   price : "650",
    //   varieties : "Bacon",
    //   extra : "",
    // },

  ]}



  return (
    <div className='menu'>
      <div className="upperBox">
        <div className="leftTopImage">
          <img src={burger} alt="burger" />
        </div>
        <div className="title">FEATURED MENU</div>
        <div className="leftTopImage">
          <img src={burger} alt="burger" />
        </div>
      </div>
      <div className="middlebox">
          <Dishes dishes={popularDishes} />
          <div className="line">
          </div>
          <Dishes dishes={newDishes} />
      </div>
      <div className="lowerBox">
        <div className="leftTopImage">
          <img src={burger} alt="burger" />
        </div>
        <Link to="/menu">
        <button>See all</button>
        </Link>
        {/* <div className="title">FEATURED MENU</div> */}
        <div className="leftTopImage">
          <img src={burger} alt="burger" />
        </div>
      </div>
    </div>
  )
}

export default Menu