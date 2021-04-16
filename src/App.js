import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState({
    cont:0,
    incremento:1
  })

  const incrementar = () => {
    setContador({...contador,cont:contador.cont + parseInt(contador.incremento)})
  }
  console.log(contador)

  const reset = () => {
    setContador({...contador,cont:0})
  }

  const onChange = (e) => {
    e.persist()
    setContador({...contador,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola soy el contador: 
          {contador.cont}
        </p>
        <input onChange={onChange} name="incremento" type="number" value={contador.incremento || ''}></input>
        <button onClick={incrementar} >Incrementar</button>
        <button onClick={reset} >Reset</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
