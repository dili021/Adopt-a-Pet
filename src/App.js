import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

const App = () => {
  const themeHook = useState("darkgoldenrod");
  return (
    <div>
      <ThemeContext.Provider value={themeHook}>
        <Navbar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
};

render(<App />, document.querySelector("#root"));
