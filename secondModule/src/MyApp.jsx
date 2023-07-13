import { useState } from 'react'
import Bottom from './Bottom'
import './App.css'
import DateTime from './DateTime'

function MyApp() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          MyApp count is {count}
        </button>        
      </div>
      <Bottom/>
      <DateTime/>      
    </>
  )
}

export default MyApp
