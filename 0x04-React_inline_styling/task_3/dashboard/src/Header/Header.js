import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
	return (
		<div className={css(styles.appHeader)}>
			<img src={logo} alt='Holberton' className={css(styles.appHeaderImage)} />
			<h1>School dashboard</h1>
		</div>
	);
};

const styles = StyleSheet.create({
  appHeader: {
    fontSize: '1.4rem',
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    padding: '1.2em',
  },
  appHeaderImage: {
    width: '250px',
    height: '250px',
  },
});

export default Header;
