import CartItems from "../Components/CartItems";
import FoodItems from "../Components/FoodItems";
import RestaurantNavbar from "../Components/RestaurantNavbar";
import SearchBar from "../Components/SearchBar";
import React from "react";
import "../Static/R1.css";
import "../Static/blog.css";
import Footer from "../Components/Footer";
import RestrauntHeader from "../Components/RestrauntHeader";
import { useState } from "react";

function Restaurant() {
  const foodItemData = [
    {
      category: "Best Seller",
      itemList: [
        {
          name: "Ultimate Loaded Nacho Fiesta",
          rating: 1,
          desc: "Nacho typically consists of layers of crispy tortilla chips topped with a variety of...",
          price: 40,
          imgPath: "images/Noodles.png",
        },
        {
          name: "Penne pasta with tomato sauce",
          rating: 1,
          desc: "Penne pasta is a versatile and popular type of pasta that is shaped like tubes with diagonally-cut ends...",
          price: 20,
          imgPath: "images/11.jpg",
        },
      ],
    },
    {
      category: "Special Combos",
      itemList: [
        {
          name: "Burger & French fries",
          rating: 1,
          desc: "Your burger dish looks perfect combination of flavors and textures.",
          price: 30,
          imgPath: "images/1.jpg",
        },
      ],
    },
    {
      category: "Sandwich",
      itemList: [
        {
          name: "Smoked Salmon Sandwich",
          rating: 1,
          desc: "This sandwich is a delightful combination of fresh crisp lettuce, juicy tomato, nestled...",
          price: 20,
          imgPath: "images/2.jpg",
        },
        {
          name: "Avocado toasts with radish",
          rating: 1,
          desc: "This sandwich is a delightful combination of fresh creamy avocado slices of toaste...",
          price: 26,
          imgPath: "images/3.jpg",
        },
        {
          name: "Cranberry Club Sandwich",
          rating: 1,
          desc: "The club sandwich is a classic favorite, known for its layers of deliciousness all sandwiched between three slices of toasted bread...",
          price: 50,
          imgPath: "images/4.jpg",
        },
      ],
    },
    {
      category: "Tacos",
      itemList: [
        {
          name: "Delicious taco shells with ground beef",
          rating: 1,
          desc: "Tacos are a delicious and versatile dish consist of a warm, soft corn or flour tortilla...",
          price: 30,
          imgPath: "images/5.jpg",
        },
        {
          name: "Spicy Shrimp Street Tacos",
          rating: 1,
          desc: "Tacos are a delicious and versatile dish consist of a warm, soft corn or flour tortilla...",
          price: 34,
          imgPath: "images/6.jpg",
        },
        {
          name: "BBQ Pulled Pork Fiesta Tacos",
          rating: 1,
          desc: "Tacos are a delicious and versatile dish consist of a roasted tortilla filled with a...",
          price: 38,
          imgPath: "images/7.jpg",
        },
      ],
    },
    {
      category: "Pasta",
      itemList: [
        {
          name: "Pasta salad with balsamic vinegar",
          rating: 1,
          desc: "Green vegetable pasta a pasta dish that incorporates various green vegetables...",
          price: 20,
          imgPath: "images/8.jpg",
        },
        {
          name: "Striped handmade ravioli",
          rating: 1,
          desc: "Ravioli is a traditional Italian pasta dish loved for its delicate, pillow-like pockets...",
          price: 20,
          imgPath: "images/9.jpg",
        },
        {
          name: "Pasta carbonara on a plate",
          rating: 1,
          desc: "Carbonara pasta is a classic Italian dish known for its rich and creamy sauce...",
          price: 55,
          imgPath: "images/10.jpg",
        },
      ],
    },
    {
      category: "Drinks",
      itemList: [
        {
          name: "Glass of coffee and milk",
          rating: 1,
          desc: "classic and comforting beverage that combines the rich flavor of coffee with the creamy goodness of milk...",
          price: 10,
          imgPath: "images/20.jpg",
        },
        {
          name: "Orange and lime fresh drinks",
          rating: 1,
          desc: "classic and comforting beverage that combines the rich flavor of coffee with the creamy goodness of milk...",
          price: 8,
          imgPath: "images/21.jpg",
        },
        {
          name: "Lemon juice",
          rating: 1,
          desc: "classic and comforting beverage that combines the rich flavor of coffee with the creamy goodness of milk...",
          price: 10,
          imgPath: "images/23.jpg",
        },
        {
          name: "Orange and lime fresh drinks",
          rating: 1,
          desc: "classic and comforting beverage that combines the rich flavor of coffee with the creamy goodness of milk...",
          price: 12,
          imgPath: "images/22.jpg",
        },
      ],
    },
  ];

  const [cart, setCart] = useState([]);
  const [amount, setamount] = useState(0);
  const [counter, setcounter] = useState(0);

  const handleAddToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    setamount(amount + item.price);
    setcounter(counter + 1);
    if (itemIndex >= 0) {
      const newCart = [...cart];
      newCart[itemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    setamount(amount - item.price);
    setcounter(counter - 1);
    if (itemIndex >= 0) {
      const newCart = [...cart];

      if (newCart[itemIndex].quantity > 1) {
        newCart[itemIndex].quantity -= 1;
      } else {
        newCart.splice(itemIndex, 1);
      }

      setCart(newCart);
    }
  };

  return (
    <>
      <RestrauntHeader cartcounter={counter} />
      <main>
        <div className="container">
          <div className="container-child1">
            <RestaurantNavbar />
            <div className="content">
              <SearchBar />
              <FoodItems data={foodItemData} addfun={handleAddToCart} />
            </div>
          </div>
          <CartItems data={cart} addfun={handleAddToCart} amount={amount} subfun={handleRemoveFromCart}/>
          {/* <h1>Mic Testing 1 2 3</h1> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Restaurant;
