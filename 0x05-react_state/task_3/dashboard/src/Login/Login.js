import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  const handleLabelClick = (event) => {
    const inputId = event.target.getAttribute('for');
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.appForm)}>
          <div className={css(styles.appFormField)}>
            <label htmlFor="email" className={css(styles.label)} onClick={handleLabelClick}>Email:</label>
            <input id="email" type="email" className={css(styles.input)} />
            <br />
          </div>
          <div className={css(styles.appFormField)}>
            <label htmlFor="password" className={css(styles.label)} onClick={handleLabelClick}>Password:</label>
            <input id="password" type="password" className={css(styles.input)} />
            <br />
          </div>
          <button className={css(styles.button)}>OK</button>
        </div>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  appBody: {
    flex: '1',
    padding: '20px',
    position: 'relative',

    '::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
    }
  },
  appForm: {
    display: 'flex',
    flexDirection: 'row',

    '@media (max-width: 900px)': {
      flexDirection: 'column'
    }
  },

  appFormField: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5px',
  },

  label: {
    marginRight: '10px',
  },
  input: {
    marginRight: '10px',
  },
  button: {
    marginRight: '10px',
    maxWidth: '70px'
  }
});

export default Login;
