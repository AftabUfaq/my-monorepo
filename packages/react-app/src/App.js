//import { ranNumber } from '@monorepo/shared';
import './App.css';
import logo from './logo.svg';
import {msg, ranNumber, SharedButton} from 'shared'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {ranNumber} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SharedButton />
      </header>
    </div>
  );
}

export default App;
