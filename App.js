import React from "react"; 
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading",  xyz: "abc" },
//   "Hello World from React!"
// );

/***
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1> I'm a h1 tag</h1>
 *          <h2> I'm a h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1> I'm a h1 tag</h1>
 *          <h2> I'm a h2 tag</h2>
 *      </div>
 * </div>
 *
 * now let's create a nested elements
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "This is Namaste React"),
        React.createElement("h2", {}, "I'm a h2 tag"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag"),
      ])
  ]
);

/**
 * Now to avoid this nested unreadable code, we will use the JSX(Javascript Extension)
 */

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
