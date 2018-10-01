import React, { Component } from 'react'

import FilterCard from './FilterCard';
import ReviewPage from './ReviewPage';
import CompareCard from './CompareCard';
import ResultPage from './ResultPage';

export default class PageContainer extends Component {
  
  render() {
    return (
      <div className='page-container row'>
        
        <div className="col-md-4">
            <FilterCard />
            <CompareCard />
            <div style={{fontSize:"70%",color:'dodgerblue',padding:'0 20px'}}>
                <img style={{height:'35px',padding:'1px',float:'left'}} src='https://www.gartner.com/reviews/img/ic_list_blue_24dp_2x.png' />
                <div style={{float:'left',width:'70%',marginLeft:'20px'}}>
                View all SAP products and services on Peer Insights
                </div>
            </div>
        </div>

        <div className='col-md-8'>
            <ReviewPage />
            <ResultPage />
        </div>

      </div>
    )
  }
}
