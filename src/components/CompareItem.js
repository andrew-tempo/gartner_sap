import React from 'react'
import Stars from './Stars';

export default (props) => {
  return (
    <div className='compare-item'>
      <a>
        <p style={{margin:0}}>{props.item.name}</p>
        <Stars rate={props.item.rate} /> <span className='arrow-left'>&rang;</span>
        <p>{props.item.rate} out of 5 ({props.item.ratings} Ratings)</p>
      </a>
    </div>
  )
}
