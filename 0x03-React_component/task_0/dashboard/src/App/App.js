import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';
import Notifications from '../Notifications/Notifications.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import './App.css';

class App extends Component {
  render() {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <div className="App">
        <Notifications />
        <Header />
        {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
