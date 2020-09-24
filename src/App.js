import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <div>
      <ThemeContext.Provider value={themeHook}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </ThemeContext.Provider>
    </div>
  );
};

render(<App />, document.querySelector("#root"));
