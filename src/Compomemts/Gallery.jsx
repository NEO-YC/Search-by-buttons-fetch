import React from "react";
import Card from "./Card";
import "./Gallery.css";
import Button from "./Button";

function Gallery() {


    const items = [
    "Laptop", "Phone", "Headphones", "Camera", "Backpack", "Watch", "Sunglasses", "Book", "Notebook", "Pen",
    "Coffee", "Tea", "Water", "Juice", "Sandwich", "Burger", "Pizza", "Salad", "Pasta", "Ice Cream",
    "Car", "Bicycle", "Scooter", "Skateboard", "Bus", "Train", "Plane", "Boat", "Subway", "Taxi",
    "Music", "Movies", "Sports", "Reading", "Coding", "Gaming", "Drawing", "Traveling", "Running", "Cooking",
    "New York", "London", "Tokyo", "Paris", "Berlin", "Rome", "Sydney", "Toronto", "Los Angeles", "Barcelona"
  ];



  const [arr, setArr] = React.useState([]);
  const[str,setStr]=React.useState("Country Israel");

  const apiKey = "53074267-d13bffe564df0c482a050df91";



  const getData = (item) => {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${item}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => setArr(data.hits))
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    getData(str);
  }, []);



  
  return (

<> 

    <div className="gallery-page">
      <div className="search-bar">

        <input onChange={(e)=>setStr(e.target.value)} type="text" placeholder="Search pictures..." />
        <button onClick={() => getData(str)}>Search</button>

      </div>




  <div className="button-list">
      {items.map((item, index) => (
        <Button key={index} name={item} func={() => getData(item)} />
      ))}
    </div>





      

      <div className="gallery">
        {arr.map((card) => (
          <Card
            key={card.id}
            image={card.webformatURL}
            likes={card.likes}
            views={card.views}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Gallery;
