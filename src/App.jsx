import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'
import NakaSec from './Nakapic.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello world</h1>
      <NakaSec />
      <Greeting />
      <div className="card">
        count is {count}
        <p>
          Edited here
        </p>
      </div>
    </>
  )
}

export default App
