import React, { Component } from 'react'

import FilterCard from './FilterCard';
import ReviewPage from './ReviewPage';

export default class PageContainer extends Component {
  render() {
    return (
      <div className='page-container row'>
        
        <div className="col-md-3">
            <FilterCard />
        </div>

        <div className='col-md-8'>
            <ReviewPage />
        </div>

      </div>
    )
  }
}
