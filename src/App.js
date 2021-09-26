import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Branch cherrypick 02
        </p>
        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Learn Cherry 01-01 ${process.env.REACT_APP_ENV}`}
        </a>
      </header>
    </div>
  );
}

export default App;
 