import React, { Component } from 'react'
import { connect } from 'react-redux';

import FilterBar from './FilterBar';

class ReviewPage extends Component {
  render() {
    return (
      <div>
        <div className='sort-row'>
          <strong style={{marginRight:'80px'}}>45 Verified Reviews</strong>
          <span className='email-button'><a>Email this page</a></span>
          <span className='sort-button'>Sort By:</span>
        </div>
        
        {this.props.filters.length !== 0 ? 
          this.props.filters.map((e,index) => 
            <FilterBar key={index} filter={e} />)
          : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
} 

export default connect(mapStateToProps)(ReviewPage);