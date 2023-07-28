import { useState } from 'react'
import './App.css'
import Greeting from './Greeting.jsx'
import NakaSec from './Nakapic.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NakaSec />
      <Greeting />
      <div className="card">
        {count}
        <p>
        </p>
      </div>
    </>
  )
}

export default App
