import logo from './holberton-logo.jpg';
import './App.css';
import './utils.js'
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  const handleLabelClick = (event) => {
    const inputId = event.target.getAttribute('for');
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" onClick={handleLabelClick}>Email:</label>
        <input id="email" type="email" />
        <br />
        <label htmlFor="password" onClick={handleLabelClick}>Password:</label>
        <input id="password" type="password" />
        <br />
        <button>OK</button>
      </div>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
