const root = ReactDOM.createRoot(document.getElementById('root'));
const heading1 = React.createElement("h1",{id:'helloworld', class:'heading' },"Hello world 1");
const heading2 = React.createElement("h1",{id:'name', class:'heading' },"Hello name");



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

