import React from "react"
import DogItem from "./DogItem"


const DogList = (props) => {
	const dogitems = props.dogs.map(dog => <DogItem key={dog.id} dog={dog} dogSwitch={props.dogSwitch}/>)
	return (
    <div id="dog-list">
      {dogitems}
    </div>
  )
}

export default DogList
