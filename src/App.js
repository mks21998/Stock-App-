import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Watchlist from "./components/Watchlist";
import WatchlistNew from "./components/WatchlistNew";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/watchlistnew" component={WatchlistNew} />
          <Route component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;