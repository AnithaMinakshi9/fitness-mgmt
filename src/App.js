import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import About from "./pages/Cards/cards";
import Member from "./pages/Member";
import Message from "./pages/Message";
import Login from "./pages/Login";

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
          <Route path="/member" component={Member} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
