import { useRef } from 'react'
import './App.css';

function App() {

  const thingRef = useRef('defaul')

  function addAccountRequest() {
    console.log("here")
    fetch(
      'http://localhost:5000/add-account',
      {
        method: 'POST',
        body: JSON.stringify({
          thing: thingRef
        })
      }
    ).then(res=>console.log(res))
  }


  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input ref={thingRef} type='text' name='thing'></input>
          <button onClick={()=> addAccountRequest()} >Submit</button>
        </form>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
