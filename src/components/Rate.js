import React from 'react'

import Stars from './Stars';

export default (props) => {
  return (
    <div className='col-md-5 rate' >
        <span className='rateChar'>{props.rate}</span>
        <Stars rate={props.rate} />
        <span className='rateNumber'>{props.ratings} Ratings</span>
        <img className="downCarrot" src='https://image.flaticon.com/icons/svg/25/25243.svg'></img> 
    </div>
  )
}
