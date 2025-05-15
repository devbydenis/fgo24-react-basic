import React from "react"
import Greetings from "./components/Greetings"
import Counter from "./components/Counter"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Greetings />
        <h1>React + Vite</h1> */}
        <Counter />
      </div>
    )
  }
}

export default App