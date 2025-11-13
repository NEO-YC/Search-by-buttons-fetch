import React from "react";
import Card from "./Card";

function Carusel() {
  const [str, setStr] = React.useState("flowers");
  const [arr, setarr] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const apiKey = "53074267-d13bffe564df0c482a050df91";

  const getData = () => {
    fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${str}&image_type=photo&pretty=true`
    ) 
      .then((res) => res.json())
      .then((data) => setarr(data.hits))
      .catch((err) => console.error(err));
  };



  React.useEffect(() => {
    getData();
  }, []);



  React.useEffect(() => {
    if (arr.length === 0) return; // אם אין תמונות – לא עושים כלום

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % arr.length);
    }, 2000);

    // כשמתעדכן arr או יוצאים מהקומפוננטה → מנקים
    return () => clearInterval(interval);
  }, [arr]); 
  //הקליר מוחק את הערך האחרון ואז בגלל שהמערך משתנה זה מתרנדר מחדש אבל בלי הערח האחרן בגלל הקליר






  return (
    <>


      <div className="search-bar">
        <input
          onChange={(e) => setStr(e.target.value)}
          type="text"
          placeholder="Search pictures..."
        />
        
        <button onClick={getData}>Search</button>
      </div>



      <div className="gallery">
        {arr.length > 0 && (
          <Card
            key={arr[currentIndex].id}
            image={arr[currentIndex].webformatURL}
            // likes={arr[currentIndex].likes}
            // views={arr[currentIndex].views}
            // tags={arr[currentIndex].tags}
          />
        )}
      </div>



    </>
  );
}

export default Carusel;
