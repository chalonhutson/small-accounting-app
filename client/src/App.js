import { useRef } from 'react'
import './App.css';

function App() {

  const thingRef = useRef('default')

  function addAccountRequest() {
    console.log("attempted")
    fetch('http://localhost:5000/add-account', {
        method: 'POST',
        body: JSON.stringify({
            test: 'thing'
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data)
        })
  }


  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input ref={thingRef} type='text' name='thing'></input>
          <button onClick={()=> {console.log("yeah")
          addAccountRequest()
          } }>Submit</button>
        </form>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
