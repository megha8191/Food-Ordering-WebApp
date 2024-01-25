import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

const root = ReactDOM.createRoot(document.getElementById('root'));


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

root.render(<AppLayout />);

