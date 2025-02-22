import React from "react";
import RestCard from "./Restcard.jsx";
import "./RestList.css";

const restaurants = [
    { id: 1, name: "KFC", image: "/kfc.png", rating: 4.5, description: "Famous for its crispy fried chicken with secret spices." },
    { id: 2, name: "McDonald's", image: "/mcd.jpg", rating: 4.3, description: "A global fast-food giant known for its Big Macs and fries." },
    { id: 3, name: "Subway", image: "/subway.png", rating: 4.2, description: "Freshly made sandwiches and salads with customizable toppings." },
    { id: 4, name: "Pizza Hut", image: "/pizzahut.jpg", rating: 4.4, description: "Delicious pan pizzas, pasta, and sides with various toppings." },
    { id: 5, name: "Burger King", image: "/burgerking.jpg", rating: 4.1, description: "Home of the flame-grilled Whopper and crispy onion rings." },
    { id: 6, name: "Domino’s Pizza", image: "/dominos.png", rating: 4.6, description: "Quick and cheesy pizzas with unique crusts and flavors." },
    { id: 7, name: "Taco Bell", image: "/tacobell.png", rating: 4.3, description: "A go-to spot for tacos, burritos, and nachos with bold flavors." },
    { id: 8, name: "Starbucks", image: "/starbucks.jpg", rating: 4.7, description: "Famous for handcrafted coffee, frappuccinos, and pastries." },
    { id: 9, name: "Dunkin' Donuts", image: "/dunkin.jpg", rating: 4.5, description: "The perfect place for coffee lovers and fresh, tasty donuts." }
  ];
  

  

const RestList = () => {
  return (
    <>
    <h2>Top Restaurants</h2>
    <div className="rest-list">
      {restaurants.map((restaurant) => (
        <RestCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
    </>
  );
};

export default RestList;
