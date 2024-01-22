import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById('root'));

const heading1 = React.createElement("h1", { className: 'title',  key:'one' }, "Hello heading 1");
const heading2 = React.createElement("h2", { className: 'title',  key:'two' }, "Hello heading 1");
const heading3 = React.createElement("h3", { className: 'title',  key:'three' }, "Hello heading 3");

const header = React.createElement(
  "div",
  {
    className:"header"
  },
  // [heading1,heading2,heading3]
  [
    React.createElement("h1", { className: 'title',  key:'one' }, "Hello heading 1"),
    React.createElement("h2", { className: 'title',  key:'two' }, "Hello heading 1"),
    React.createElement("h3", { className: 'title',  key:'three' }, "Hello heading 3")
  ]
)

const Headerfunc = ()=>{
  return(
  <div className="header-jsx">
    <h1>Hello JSX 1</h1>
    <h2>Hello JSX 2</h2>
    <h3>Hello JSX 3</h3>
  </div>
  )
}
const headerJSX = (
  <div className="header-jsx">
    <Headerfunc/>
    {Headerfunc()}
    <Headerfunc>write me</Headerfunc>
    <h1>Hello JSX 1</h1>
    <h2>Hello JSX 2</h2>
    <h3>Hello JSX 3</h3>
  </div>
);

const HeaderComponent =()=>{
  return(
  <header id ="header" className="headerClass">
    <a href=""><img className="logo" src="https://i.pinimg.com/736x/55/75/8a/55758a21a4a774d98b0a0ce5f2033312.jpg"></img></a>
    <div className="searchblock">
      <input name="search" type ="search" className="form-control"/>
      <input type="submit" className="btn-theme"/>
    </div>
    <img className="userimg" src="https://lh3.googleusercontent.com/a/ACg8ocL7OR2UWLGrVPXT-GNyrdmCbP-_hJCbo981RkyPkBtitCk=s288-c-no"></img>
  </header>)
}



root.render(<HeaderComponent/>);



