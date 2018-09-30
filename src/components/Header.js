import React, { Component } from 'react'
import Nav from './Nav';
import Info from './Info';
import Login from './Login';


export default class Header extends Component {

  state = {
    showAcc: false
}

showAccount = () => {
  this.setState({showAcc:true})
}

hideAccount = () => {
  this.setState({showAcc:false})
}

  render() {
    return (
      <div>

        <Nav 
          showAccount={this.showAccount} 
          hideAccount={this.hideAccount}
          showSearch={this.showSearch} />
        {this.state.showAcc ? <Login /> : null}

        <Info hideAccount={this.hideAccount}/>

        
      </div>
    )
  }
}

