import React from "react"
import ReactDOM from "react-dom"
import { hot } from 'react-hot-loader'

const App = () => {
  return (
    <div>
      <p>here!</p>
    </div>
  )
}
export default hot(module)(App)
ReactDOM.render(<App />, document.getElementById('app'))

