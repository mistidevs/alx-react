import './Login.css'
import React from 'react';

const Login = () => {
  const handleLabelClick = (event) => {
    const inputId = event.target.getAttribute('for');
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <React.Fragment>
    <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="App-Form">
          <label htmlFor="email" onClick={handleLabelClick}>Email:</label>
          <input id="email" type="email" />
          <br />
          <label htmlFor="password" onClick={handleLabelClick}>Password:</label>
          <input id="password" type="password" />
          <br />
          <button>OK</button>
        </div>
    </div>
  </React.Fragment>
  );
}

export default Login;
