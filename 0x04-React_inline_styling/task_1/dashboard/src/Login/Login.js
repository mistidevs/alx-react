import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
	return (
		<>
			<div className={css(styles.appBody)}>
				<p>Login to access the full dashboard</p>
				<section className={css(styles.formInputs)}>
					<section className={css(styles.formInput)}>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' id='email' />
					</section>
					<section className={css(styles.formInput)}>
						<label htmlFor='password'>Password: </label>
						<input type='password' name='password' id='password' />
					</section>
					<button>OK</button>
				</section>
			</div>
		</>
	);
};

const styles = StyleSheet.create({
  appBody: {
    fontSize: '1.4rem',
    padding: '1.2em',
    height: '45%',
  },
  formInputs: {
    display: 'flex',
    gap: '2em',
    alignItems: 'center',
  },
  formInput: {
    input: {
      height: '1.4rem',
      marginLeft: '10px',
    },
  },
});

export default Login;
