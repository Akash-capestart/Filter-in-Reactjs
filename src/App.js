import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataContextProvider from "./Context/DataContext";
import SearchComponent from "./Components/SearchComponent";
import CardsComponent from "./Components/CardsComponent";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <SearchComponent />
        <CardsComponent />
      </DataContextProvider>
    </div>
  );
}

export default App;
