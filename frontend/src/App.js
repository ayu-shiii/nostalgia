import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Entry from "./components/Entry/Entry";
import Response from "./components/Entry/Response";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/entry" element={<Entry />} />
        </Routes>
        <Routes>
          <Route exact path="/response/:id" element={<Response />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
