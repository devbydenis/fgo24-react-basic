import { useState } from "react"

function Greeting() {
  const [greeting, setGreeting] = useState("Good Morning")
  return (
    <>
      <h1>Hello, {greeting}!</h1>
      <button onClick={() => setGreeting("Good Evening")}>Good Evening</button>
    </>
  )
}

export default Greeting