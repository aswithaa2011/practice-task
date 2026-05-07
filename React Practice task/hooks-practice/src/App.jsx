import { useState } from "react"

const App = () => {


  const [count,setCount]=useState(0)

  const handleClick=()=>{
    setCount(prev=>prev+1)

  
  }
  return (
    <div>
      <button onClick={handleClick} className="bg-black text-white p-2 m-5 rounded-xl ">counter</button>

      <p>{count}</p>
    </div>
  )
}

export default App
