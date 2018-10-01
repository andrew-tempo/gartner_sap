import React, { Component } from 'react'

import Stars from './Stars';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <strong className='filter-name'>{this.props.filterName}</strong>

        {this.props.filterContent.map((e,index) => {
            return (
            <p className='filter-description'> 
                <a>
                <input style={{marginRight:"4px"}}type='checkbox' />

                {this.props.filterName !== 'Overall Rating' 
                ?
                <span> {e.description}</span>
                :
                <span style={{fontSize:'18px'}}> <Stars rate={e.description} /> </span>
                }
                <span>({e.rateNumber})</span></a>
            </p> 
            )   
        })}

      </div>
    )
  }
}
