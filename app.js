import React , {useState} from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){

let [counterValue ,setCounter] = useState(10);

const add =()=>{
  if(counterValue<20)
  counterValue= counterValue + 1;
  setCounter(counterValue)
}
const sub =()=>{
  if(counterValue>0)
  counterValue= counterValue - 1;
  setCounter(counterValue)
}

let Counter = () => {
  return (
    <div className="counterbox" style={{ backgroundColor: "#000", minHeight: "80vh", flexDirection:"column",gap:"20px",color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>Counter Value : {counterValue}</h1>
      <p>{counterValue}</p>
      <h1 style={{fontSize:'60px', fontWeight:'bold'}}>{counterValue}</h1>
      <div className="buttons-group" style={{gap:"20px", display:"flex"}}>
        <button onClick={add} key="1">Add Value</button>
        <button onClick={sub}  key="12">Sub Value</button>
      </div>
    </div>
  )
}

return <Counter></Counter>

}
root.render(<App />);



