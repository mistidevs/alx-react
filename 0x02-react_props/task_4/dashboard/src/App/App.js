import Header from '../Header/Header.js';
import Notifications from '../Notifications/Notifications.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

function App({ isLoggedIn }) {
  return (
    <div className="App">
    <Notifications />
    <Header />
    {isLoggedIn ? <CourseList /> : <Login />}
    <Footer />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
