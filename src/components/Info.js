import React, { Component } from 'react'
import Rate from './Rate';

export default class Info extends Component {

state = {
  directories:['All markets','SAP Application Services, Worldwide'],
  company:'SAP',
  rate:4.2,
  ratings:52
}

  render() {
    return (
      <div 
        className='info'
        onMouseOver={this.props.hideAccount}
        >
        
        <div className='top row'>
          <div className="col-md-7 t1">
            <ul className='directory'>
            {this.state.directories.map((e,index) => {
              if(index === 0) 
                  return <li><a>{e}</a></li>
              else 
                  return <li>&nbsp;<span>></span>&nbsp;<a>{e}</a></li>
            })}
            </ul>
            <div className='companyLabel'>{this.state.company}</div>  
          </div>
          <div className="col-md-5 t2">
            <p><a>Critical Capabilities</a></p>  
            <p><a>Magic Quadrant</a></p>
          </div>
        </div>



        <div className='bottom row'>
            <Rate 
              rate={this.state.rate}
              ratings={this.state.ratings} />
        </div>

      </div>
    )
  }
}
