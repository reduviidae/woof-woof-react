import React from "react"

const DogInfo = (props) => {

		const imgStyle = {
			boxShadow: `0 0 30px 15px yellow, 0 0 50px 15px yellow, 0 0 75px 45px yellow`
		}

		return (
			<div id="dog-info">
				<img src={props.dog.image} style={imgStyle} alt="pup pup"/>
				<h2>{props.dog.name}</h2>
				<h3>{props.dog.isGoodDog ? "Good dog!" : "Bad dog!"}</h3>
				<button onClick={e => props.changeGoodness(props.dog)}>Good Dog</button>
			</div>
		)

}

export default DogInfo
