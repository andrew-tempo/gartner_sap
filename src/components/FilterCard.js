import React, { Component } from 'react'

import Filter from './Filter';

export default class FilterCard extends Component {

state = {

  filters:[
    {
      filterName:'Products',
      filterContent: [
        {description: 'SAP Managed Services Application Implementation Services',
        rateNumber: 30},
        {description: 'SAP Managed Services Application Implementation Services',
        rateNumber: 30}
      ]
    },
    {
      filterName:'Overall Rating',
      filterContent: [
        {description: 5,
        rateNumber: 9},
        {description: 4,
        rateNumber: 19},
        {description: 3,
        rateNumber: 1},
        {description: 2,
        rateNumber: 1},
        {description: 1,
        rateNumber: 10}
      ] 
    }

  ]
}

  render() {
    return (
      <div className='filter-card'>
        <strong style={{fontSize:'70%'}}>Filter User Reviews By:</strong>

        <Filter filterName={this.state.filters[0].filterName} filterContent={this.state.filters[0].filterContent}/>
        <Filter filterName={this.state.filters[1].filterName} filterContent={this.state.filters[1].filterContent}/>
      </div>
    )
  }
}
