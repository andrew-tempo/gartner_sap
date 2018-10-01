import React, { Component } from 'react'

import Filter from './Filter';
import FilterWithToggle from './FilterWithToggle';


export default class FilterCard extends Component {

state = {

  filters:[
    {
      filterName:'Products',
      filterContent: [
        {description: 'SAP Managed Services Application Implementation Services',
        rateNumber: 30},
        {description: 'SAP Managed Services Application Management Services',
        rateNumber: 22}
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
    },
    {
      filterName:'Reviewer\'s Industry',
      filterContent: [
        {description: 'Manufacturing',
        rateNumber: 12},
        {description: 'Services',
        rateNumber: 5},
        {description: 'Energy and Utilities',
        rateNumber: 3},
        {description: 'Retail',
        rateNumber: 3},
        {description: 'Finance',
        rateNumber: 2},
        {description: 'Transportation',
        rateNumber: 2},
        {description: 'Finance',
        rateNumber: 2},
        {description: 'Communications',
        rateNumber: 1},
        {description: 'Education',
        rateNumber: 1},
        {description: 'Government',
        rateNumber: 1}
      ] 
    },
    {
      filterName:'Reviewer\'s Job Role',
      filterContent: [
        {description: 'CIO',
        rateNumber: 13},
        {description: 'Program and Portfolio Management',
        rateNumber: 5},
        {description: 'Applications',
        rateNumber: 4},
        {description: 'Data and Analytics',
        rateNumber: 2},
        {description: 'Enterprise Architecture and Technology Innovation',
        rateNumber: 2},
        {description: 'Infrastructure and Operations',
        rateNumber: 2},
        {description: 'Finance',
        rateNumber: 2},
        {description: 'Analyst',
        rateNumber: 1},
        {description: 'CEO',
        rateNumber: 1}
      ] 
    },
    {
      filterName:'Reviewer\'s Company Size',
      filterContent: [
        {description: '<50M USD',
        rateNumber: 1},
        {description: '250M - 500M USD',
        rateNumber: 1},
        {description: '500M - 1B USD',
        rateNumber: 4},
        {description: '1B - 3B USD',
        rateNumber: 2},
        {description: '3B - 10B USD',
        rateNumber: 2},
        {description: '10B - 30B USD',
        rateNumber: 2},
        {description: '30B + USD',
        rateNumber: 2},
        {description: 'Gov\'s/PS/ED 5,000-50,000 Employees',
        rateNumber: 1},
        {description: 'Gov\'s/PS/ED 50,000 + Employees',
        rateNumber: 1}
      ] 
    }

  ]
}

ReviewFilter = FilterWithToggle(this.state.filters[2].filterName, this.state.filters[2].filterContent);
ReviewJobRow = FilterWithToggle(this.state.filters[3].filterName, this.state.filters[3].filterContent);

  render() {
    return (
      <div className='filter-card'>
        <strong style={{fontSize:'70%'}}>Filter User Reviews By:</strong>

        
        <Filter filterName={this.state.filters[0].filterName} filterContent={this.state.filters[0].filterContent}/>
        <Filter filterName={this.state.filters[1].filterName} filterContent={this.state.filters[1].filterContent}/>
        <this.ReviewFilter />
        <this.ReviewJobRow />
        <Filter filterName={this.state.filters[4].filterName} filterContent={this.state.filters[4].filterContent}/>
      </div>
    )
  }
}
