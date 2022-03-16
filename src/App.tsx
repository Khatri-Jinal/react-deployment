import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
const NewNews = React.lazy(() => import("./components/News"));
const NewAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<NewAbout />}></Route>
            <Route path="/contact" element={<NewNews />}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
