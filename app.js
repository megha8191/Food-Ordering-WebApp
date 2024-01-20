import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById('root'));
const heading1 = React.createElement(
  "h1",
  {
    id: 'helloworld',
    className: 'heading',
    key:'01'
  },
  "Hello world 1"
);
const heading2 = React.createElement("h1", { id: 'name', className: 'heading',  key:'2' }, "Hello name");

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

//passing a react element inside the root 
//async defer

root.render(container);



