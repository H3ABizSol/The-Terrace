import React from 'react'
import Dish from '../component/MenuPage/Dish';
import ScrollToTop from './ScrollToTop';

const MenuPage = () => {

  
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

  ]}

  return (
    <div className='menuPage'>
      <div className="container">
      <div className="title">MENU</div>
      <Dish type={newDishes} title={'Breakfast'} />
      <Dish type={newDishes} title={'Lunch'}/>
      <Dish type={newDishes} title={'Dinner'}/>
      <Dish type={newDishes} title={"Snacks & Beve's"}/>
      <Dish type={newDishes} title={'Desserts'}/>
      </div>
    <ScrollToTop/>
    </div>
  )
}

export default MenuPage