import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const [searchval, setSearchval] = useState("");
  const data = [
    {
      id: "1",
      name: "dosai",
      image:
        "https://holycowvegan.net/wp-content/uploads/2022/03/dosa-recipe-dosa-batter-7.jpg",
    },
    {
      id: "2",
      name: "parota",
      image:
        "https://i.pinimg.com/736x/0c/90/62/0c9062693c77d8fd0b42de085657c4ae--indian-breakfast-kerala.jpg",
    },
    {
      id: "3",
      name: "shawarma",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma-600x600.jpg",
    },
    {
      id: "4",
      name: "poori",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzk6g7gm-5fquagcVUP4M-jWKBEy7EzKCSg&usqp=CAU",
    },
  ];
  return (
    <div className="App">
      <div className="inputarea">
        <input type="text" onChange={(e) => setSearchval(e.target.value)} />
      </div>
      <div className="appdata">
        {data
          .filter((d) => {
            if (searchval == " ") {
              return d;
            } else if (d.name.toLowerCase().includes(searchval)) {
              return d;
            }
          })
          .map((val, k) => {
            return (
              <div className="container" key={k}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "300px" }}
                    src={val.image}
                  />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      {val.name}
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
