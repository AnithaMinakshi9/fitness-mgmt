import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import About from "./pages/Cards/cards";
import Message from "./pages/Message";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
          <Route path="/message" component={Message} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
