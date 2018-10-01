import React, { Component } from 'react';
import Filter from './Filter';



const FilterWithToggle = (name,content) => {
    return class extends Component {
        realContent = content.slice(0,3);
        state = {
            open: false
        }

        showLess = () => {
            this.realContent = content.slice(0,3);
            this.setState({open:false});
        }

        showMore = () => {
            this.realContent = content;
            this.setState({open:true})
        }

        render(){
            return (
                <div>
                <Filter filterName={name} filterContent={this.realContent} />
                {this.state.open ? 
                    <p 
                        className='show-button'
                        onClick={this.showLess}>View Less 
                    </p>
                    :
                    <p 
                        className='show-button'
                        onClick={this.showMore}>View All 
                    </p>
                }                
                </div>
            )
        }
    }
}

export default FilterWithToggle;






