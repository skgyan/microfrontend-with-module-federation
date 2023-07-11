import { useState } from 'react'
import Bottom from './Bottom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>        
      </div>
      <Bottom/>      
    </>
  )
}

export default App
