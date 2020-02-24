import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParam";

const App = () => {
  return (
    <div>
      <h1 id="some thing-important">Adopt Me !</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

render(<App />, document.getElementById("root"));
