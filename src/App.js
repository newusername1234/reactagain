import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card name="Project Awesome" likes={0} />
      <Card name="Project Awesomest" likes={1} />
      <Card name="The REAL project awesome" likes={2} />
      <Card />
    </div>
  );
}

export default App;
