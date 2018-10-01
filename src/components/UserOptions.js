import React from 'react'

export default (props) => {

    let activeClass = '';
    props.selected === true ? activeClass= 'user-options thick-bottom-border' : activeClass = 'user-options';
  
    return (
    <div className={activeClass}>
      <p onClick={props.changeOption}>{props.name}</p>
    </div>
  )
}
