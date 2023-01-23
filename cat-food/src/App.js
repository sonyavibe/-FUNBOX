import React from 'react';
import "./App.css";
import Card from './components/Card';
import Data from './components/Data';

function App() {
  return (
    <div>
      <main className='main'>
        <h1>Ты сегодня покормил кота?</h1>
        <div className='card__container'>
          {Data.map((item) => {
            return <Card item={item} key={item.id} />
          })}
        </div>        
      </main>
    </div>
  );
}

export default App;
