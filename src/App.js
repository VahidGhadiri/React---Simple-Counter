import React, {useState} from "react"
import style from "./style.css"

const Counter = () => {
const [count, setCount] = useState(0)

function decrement(){
  setCount(count-1)
}

function increment(){
  setCount(count+1)
}

  return(
    <div>
    <div className="container">
    <h1>Counter</h1>
      <div className ="counter-box">
          <button onClick ={decrement}>-</button>
          <span>{count}</span>
          <button  onClick={increment}>+</button>
          </div>
      </div>
    </div>
  )
}

export default Counter