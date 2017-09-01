import React from 'react'

const Giphy = (props) => {
  const buttons = []
	for (var key in props.clickOptions) {
		buttons.push(<button key={key} name="giphy" onClick={props.clickOptions[key]}>{key}</button>)
	}
  
  return(
    <div>
      <img src={props.giphy} alt="https://me.me/i/before-theymet-chuck-norris-the-blackened-peaswere-simplyiknownas-the-peas-2344729"/>
    	<div>{buttons}</div>
    </div>
  )
}


export default Giphy
