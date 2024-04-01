import logo from './logo.svg';
import './App.css';
import PrimerComponente from './Components/PrimerComponente';
import SegundoComponente from './Components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tengo ganas de comer algo la verdad, para que mentir
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimerComponente />

        <hr />
        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;
