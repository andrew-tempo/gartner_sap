import React from 'react'
import {connect} from 'react-redux';
import {toggleFilter} from '../reducers/actionCreators';
const FilterBar = (props) => {
  return (
    <div className='filter-bar'>

    {[1,2,3,4,5].indexOf(props.filter) === -1 ?
      <p onClick={() => props.toggleFilter(props.filter)}>{props.filter} &nbsp; &times;</p>
      :
      <p onClick={() => props.toggleFilter(props.filter)}>{props.filter} Stars &nbsp; &times;</p>
    }
    </div>
  )
}

export default connect(null,{toggleFilter})(FilterBar);