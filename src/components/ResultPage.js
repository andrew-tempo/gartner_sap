import React, { Component } from 'react'
import { connect } from 'react-redux';

import ResultCard from './ResultCard';

class ResultPage extends Component {


  render() {
    console.log(this.props);
    return (
      <div className='result-page'>
        {this.props.results.length !== 0 ? this.props.results.map((e,index) => 
            <ResultCard 
                key={index}
                {...e}
            />
        )
      :
          <p>No Results</p>
    }
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

