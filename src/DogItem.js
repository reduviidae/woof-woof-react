import React from "react"

const DogItem = (props) => {
	return (<span onClick={ e => props.dogSwitch(props.dog)}>{props.dog.name}</span>)
}

export default DogItem
