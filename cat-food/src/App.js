import React from 'react';
import "./App.css";
import Card from './components/Card';

function App() {
  return (
    <div>
      <main className='main'>
        <h1>Ты сегодня покормил кота?</h1>
        <div className='card__container'>
          <Card />
          <Card />
          <Card />
        </div>        
      </main>
    </div>
  );
}

export default App;
