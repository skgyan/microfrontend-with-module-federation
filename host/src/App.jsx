import './App.css'

import Button from "remote/Button";
import useStore from "remote/store";
import Bottom from "paycard/Bottom"

function App() {
  const [count, setCount] = useStore();


  return (
    <div className="App">
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Host count is {count}
        </button>
      </div>      
      <Bottom/>
    </div>
  )
}

export default App
