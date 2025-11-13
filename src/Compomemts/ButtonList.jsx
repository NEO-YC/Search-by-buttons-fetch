import React from 'react'
import Button from './Button';
import './Button.css'




function ButtonList() {

  const items = [
    "Laptop", "Phone", "Headphones", "Camera", "Backpack", "Watch", "Sunglasses", "Book", "Notebook", "Pen",
    "Coffee", "Tea", "Water", "Juice", "Sandwich", "Burger", "Pizza", "Salad", "Pasta", "Ice Cream",
    "Car", "Bicycle", "Scooter", "Skateboard", "Bus", "Train", "Plane", "Boat", "Subway", "Taxi",
    "Music", "Movies", "Sports", "Reading", "Coding", "Gaming", "Drawing", "Traveling", "Running", "Cooking",
    "New York", "London", "Tokyo", "Paris", "Berlin", "Rome", "Sydney", "Toronto", "Los Angeles", "Barcelona"
  ];




  return (
    <div className="button-list">
      {items.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
}

export default ButtonList