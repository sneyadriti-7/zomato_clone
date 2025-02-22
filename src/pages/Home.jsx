import React from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import Bg from "../components/Bg.jsx";
import "./Home.css"; 
import RestList from "../components/RestList.jsx";

const restaurants = [
  { id: 1, name: "Sea Food", image: "/d1.jpg", rating: 4.5 },
  { id: 2, name: "Kimbap", image: "/d2.jpg", rating: 4.2 },
  { id: 3, name: "Meat", image: "/d3.jpg", rating: 4 },
  { id: 4, name: "Pasta", image: "/d4.jpg", rating: 4.4 },
  { id: 5, name: "Waffle", image: "/d5.jpg", rating: 4 },
  { id: 6, name: "Chicken", image: "/d6.jpg", rating: 5 },
  { id: 7, name: "Curry", image: "/d7.jpg", rating: 4.8 },
  { id: 8, name: "Sushi", image: "/d8.jpg", rating: 5 },
  { id: 9, name: "Biriyani", image: "/d9.jpg", rating: 4.3 },
  { id: 10, name: "Burger", image: "/d10.jpg", rating: 4.6 }
];

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="home-container">
      {/* Header with Login & Sign Up Buttons */}
      <div className="header">
        <button className="auth-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="auth-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>

      <Bg />
      <h2 className="title">Food</h2>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
      <RestList />
    </div>
  );
};

export default Home;
