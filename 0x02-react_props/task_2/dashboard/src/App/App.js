import Header from '../Header/Header.js';
import Notifications from '../Notifications/Notifications.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Notifications />
    <Header />
    <Login />
    <Footer />
    </div>
  );
}

export default App;
