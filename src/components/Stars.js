import React from 'react'

export default (props) => {

let rate = props.rate/5 * 100;
  return (
   
    <div className='star-wrapper'>
        <div className="star-rating" title="100%">
            <div className="back-stars">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                
                <div className="front-stars" style={{width:`${rate}%`}}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>

  )
}
