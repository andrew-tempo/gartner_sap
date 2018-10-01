import React, { Component } from 'react'
import Rate from './Rate';
import UserOptions from './UserOptions';

export default class Info extends Component {

state = {
  directories:['All markets','SAP Application Services, Worldwide'],
  company:'SAP',
  rate:4.4,
  ratings:52,
  userOptions:['User Reviews','User Ratings','Alternatives'],
  selectedOption: 0
}

toggleOptionClass = (index) => {
  this.setState({selectedOption: index})
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
                  return <li key={index}><a>{e}</a></li>
              else 
                  return <li key={index}>&nbsp;<span>></span>&nbsp;<a>{e}</a></li>
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
            <div className='col-md-8' >
                <Rate 
                  rate={this.state.rate}
                  ratings={this.state.ratings} 
                />
                <button className="btn compare-button">Compare this Vendor</button>
                <a href='/'>
                  <input type='checkbox' className='checkbox'/>
                  <span style={{color:'white',fontSize:'80%'}}>I use their products</span>
                </a>    
            </div>

            <div className='col-md-4'>
            {this.state.userOptions.map((e,index) => {
              if(index === this.state.selectedOption)
                return <UserOptions key={index} changeOption={() =>this.toggleOptionClass(index)} selected={true} name={e} />
              else
                return <UserOptions key={index} changeOption={() => this.toggleOptionClass(index)} name={e} />
            })}
              
            </div>


        </div>

      </div>
    )
  }
}
