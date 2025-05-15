import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const Increment = () => {
    setCount(count + 1)
  }
  const Decrement = () => {
    setCount(count - 1)
  }

  if (count < 0) {
    setCount(0)
  } else if (count > 10) {
    setCount(10)
  }

  return (
    <>
      <h1>Counter</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={Decrement}>Decrement</button>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
      </div>
    </>
  )
}

export default Counter