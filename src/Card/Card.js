import React from 'react'

const Card = ({ 
  id,
  thumb,
  trainer,
  title,
  time,
  distance,
  isSeries,
  seriesCount,
  isActive,
  onClick
}) => {    

  const convertToEmDash = (string) => {
    const newString = string.replace(/--/g, "—")
    return newString
  }

  return (
    <div className={isActive ? 'card active' : 'card'} id={id} onClick={ onClick }>
      <div className='thumb-container'>
        <img className='thumb' src={ thumb } alt={`${title}`} />
        {isSeries &&
          <div className='playlist'>
            <p className='series-count'>{seriesCount}</p>
            <p className='series-text'>Workouts</p> 
            <img 
              src={require('../assets/icons/series-icon.png')} 
              alt='series icon' 
              className='series-icon'
            />
          </div>
        }
      </div>
      <div className='card-info'>
        <div className='class-info'>
          <div className='title'>{ convertToEmDash(title) }</div>
          <img className='trainer' src={ trainer } alt={`${title} thumbnail`}/>
        </div>
        {!isSeries ?
          <div className='metrics'>
            <span className='time'>
              <img 
                src={require('../assets/icons/timer-icon.png')} 
                alt='timer icon' 
                className='timer-icon' 
              />
              { time }
            </span>
            <span className='distance'>
              <img 
                src={require('../assets/icons/track-icon.png')} 
                alt='track icon' 
                className='track-icon' 
              />
              { distance }
            </span>
          </div>
          :
          <div className='metrics'></div>
        }
        {isActive ?
          <p className='details'>View Details</p> :
          <p className='details'> </p>
        }
      </div>
    </div>
  )
}

export default Card
