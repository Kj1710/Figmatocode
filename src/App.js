import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import Curriculum from './components/Curriculum/Curriculum';
import Refund from './components/Refund/Refund';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Overview />
        <Curriculum />
        <Refund />
      </main>
    </div>
  );
}

export default App;
