import React, { Component } from 'react'

export default class Nav extends Component {

    state = {
        showSearch:false
    }

    toggleSearch = () => {
        this.setState({showSearch:!this.state.showSearch})
    }

  render() {
    return (
      <div className='nav'>
        <div className='col-md-4'>
            <img className='logo' src='https://www.gartner.com/reviews/img/logo-gpi-2.png' alt='logo' />
        </div>
        <div 
            className="col-md-5"
            onMouseOver={this.props.hideAccount}>
            <ul>
                <li><a onClick={this.toggleSearch}><img className='qm' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFmSURBVEhLtZQ5TsUwFEVDQwNsANgDrIap+RINcwUNiAKWBR8KJtGxAGhomFfAIOCcKJair3zHQeZKR5Ht9/wc+9pFg8ZhC07hEd6r7wnY7/iftQiv8BPhGeahs/bhG5zkDOZgEkar7wJcgOPG7UGyXJFJH7BqR0Tr8AnGu4hWTcALuLI1OxK0AWG7Ws/EgzP4vGyl6xLM2yxbEekOA7senIYw77hsRfQEBnqQXTQF5j2UrYj0uYG6pYuMN8/8qP79D/pgoD7voiUw76hsRaQLDPQSpWoErsA8LRuV90A/JwVXCotye8fsaFP9JntTY3IRX2CBHTtStQvhLfIS6XMPUrdMV+1rcDzwBrOQLP/Ep7k+ySCOb4OT2/a7DIeQ5ETfFvdYd2lBfe7XG2t/eHtmIBQJ3IF/m009qBfIXuQABgtkLaIJbqGpiP1ZijjJsCI3kEXDitxDNjUVWYGssojb4sqZvCh+AYg7jeVmD0oaAAAAAElFTkSuQmCC" alt='qm'/></a></li>
                <li><a>WRITE A REVIEW</a></li>
                <li><a>FOR VENDORS</a></li>
            </ul>        
        </div>
        <div 
            className='col-md-2 myAcc'
            onMouseOver={this.props.showAccount}
        >
            <a>MY ACCOUNT <img className="downCarrot" src='https://image.flaticon.com/icons/svg/25/25243.svg'></img></a>
        </div>   
        <div className="col-md-1" onMouseEnter={this.props.hideAccount}></div>
 
        {this.state.showSearch ? 
            (
                <div className='input-box'>
                    <div className='form-group'>
                    <input placeholder='Enter a product or vendor name'></input> <span onClick={this.toggleSearch}>&times;</span>
                    </div>
                </div> 
            ): null}
    </div>
    )
  }
}
