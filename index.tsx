import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Article from "./components/article/Article";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

import { articles } from "./fakeDB";

function App() {
  return (
    <Router>
      <Navbar />

      <br />

      <div className="container">
        <div className="row">
          <div className="col">
            <Switch>
              <Route
                path="/articles/:id"
                render={props => {
                  const article = articles.find(
                    ({_id}) => _id === props.match.params.id
                  );
                  return <Article {...props} data={article} />;
                }}
              />

              <Route path="/">
                <Home articles={articles} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
