import React, { useState } from 'react';
import './App.css';
import Card from './Card/Card'
import data from './data/data'

const App = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const cards = data.map((classData, i) => {
    return (
      <Card 
        key={i}
        id={i + 1}
        thumb={classData.thumb}
        trainer={classData.trainer}
        title={classData.title}
        time={classData.time}
        distance={classData.distance}
        isSeries={classData.isSeries}
        seriesCount={classData.seriesCount}
        isActive={currentCard === i + 1}
        onClick={() => setCurrentCard(i + 1)}
      />
    )
  })

  return (
    <div className="App">
      {cards}
    </div>
  )
}

export default App;
