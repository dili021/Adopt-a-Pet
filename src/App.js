import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "test-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "bobi", animal: "ker", breed: "dzukela" }),
    React.createElement(Pet, { name: "leo", animal: "ker", breed: "pudla" }),
    React.createElement(Pet, { name: "kurac", animal: "ker", breed: "kurac" }),
  ]);
};

render(React.createElement(App), document.querySelector("#root"));
