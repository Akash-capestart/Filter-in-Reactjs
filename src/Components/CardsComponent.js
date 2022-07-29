import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { DataContext } from "../Context/DataContext";

const CardsComponent = () => {
  const { data, searchstring, cleardata } = useContext(DataContext);

  console.log("searchval", searchstring);
  return (
    <div className="appdata">
      {data.map((val, k) => {
        return (
          <div className="container" key={k}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={val.image}
              />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>{val.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardsComponent;
