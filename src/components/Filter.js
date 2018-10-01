import React, { Component } from 'react'
import {connect} from 'react-redux';

import Stars from './Stars';
import { toggleFilter } from '../reducers/actionCreators';

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <strong className='filter-name'>{this.props.filterName}</strong>

        {this.props.filterContent.map((e,index) => {
            return (
            <div key={index} className='filter-description'> 
                <a>
                <input checked={this.props.filters.indexOf(e.description) !== -1 ? true : false} onChange={() => this.props.toggleFilter(e.description)}style={{marginRight:"4px"}}type='checkbox' />

                {this.props.filterName !== 'Overall Rating' 
                ?
                <span> {e.description}</span>
                :
                <span style={{fontSize:'18px'}}> <Stars rate={e.description} /> </span>
                }
                <span>({e.rateNumber})</span></a>
            </div> 
            )   
        })}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps, {toggleFilter})(Filter);
