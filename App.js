import React from "react";
import ReactDOM from "react-dom/client";

//React
// const heading = React.createElement("h1", { id: "heading" }, "This is React");

// JSX - HTML like syntax
// JSX => React.createElement("h1", {id:"heading"}, "Namaste React") => ReactElement-JS Object => HTMLElement(render);
const jsxHeading = <h1 id="heading">Namaste React from JSX</h1>;

//React Element
const heading = (
  <h1 className="head">
    Namaste React !!
  </h1>
)

//Functional Component
const Title = () => {   // This is one way to write 
  return <h2>React Episode 3</h2>
}

const HeadingComponent2 = () => (  // This is another way to write same function, where we used () as our code is written in different lines 
  <h3>This is the functional component 2</h3>
)

const HeadingComponent3 = () => (  // This is another way to write same function 
  <div id="container">
    {heading}
    {Title()} {/**We can call Title component this way also */}
    <Title/>  {/**or this way */}
    <Title></Title> {/**or this */}
    <h3 className="heading">This is the functional component</h3>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
root.render(<HeadingComponent3/>);
