import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Branch c1.1 commit
        </p>
        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Learn c2 first commit ${process.env.REACT_APP_ENV}`}
        </a>
      </header>
      <main>C2 2nd commit</main>
    </div>
  );
}

export default App;
 