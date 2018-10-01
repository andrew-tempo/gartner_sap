import React, { Component } from 'react'
import CompareItem from './CompareItem';

export default class CompareCard extends Component {
    
    state = {
        items: [
            {name:'IBM',rate:4.1,ratings:13},
            {name:'Accenture',rate:4,ratings:14},
            {name:'Deloitte',rate:4.3,ratings:21},
        ]
    }

  render() {
    return (
      <div className='compare-card'>
        <p style={{fontSize:'90%',fontWeight:'bold',padding:'20px',marginBottom:0}}>Compare to Alternatives</p>

        {this.state.items.map((e,index) => {
            return <CompareItem key={index} item={e} />
        })}

      </div>
    )
  }
}
