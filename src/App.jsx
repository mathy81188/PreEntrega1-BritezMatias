import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/NavBar/navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          </div>
          <ItemListContainer />
        </div>
      </Router>
    );
  }
}

export default App;
