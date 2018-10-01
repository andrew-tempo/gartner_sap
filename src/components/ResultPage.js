import React, { Component } from 'react'
import { connect } from 'react-redux';

import ResultCard from './ResultCard';

class ResultPage extends Component {


  render() {
    return (
      <div className='result-page'>
        {this.props.results.map((e,index) => 
            <ResultCard 
                key={index}
                {...e}
            />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(ResultPage);

