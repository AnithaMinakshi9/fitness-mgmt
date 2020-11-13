import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
import Appoint from "./appoint";

function Home() {
  return (
    <>
      <div className="top">
        <div class="info">
          <div class="large">Get Fit Go!</div>
          <div class="small">
            All progress takes place outside the comfort zone
          </div>
        </div>
        <div className="buttons">
          <Appoint variant="contained" color="default"></Appoint>
          <br />
          <Button variant="contained" color="default">
            Visit us
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
