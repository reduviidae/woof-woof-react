import React, { Component } from 'react';

import DogList from "./DogList"
import DogInfo from "./DogInfo"


class App extends Component {
  state={
    dogs: [],
    dog: {
          id: 1,
          name: "Mr. Bonkers",
          isGoodDog: true,
          image: "https://weloveanimals.me/wp-content/uploads/2017/10/gettyimages-590486672-e1508512743796.jpg"
        }
  }

  componentDidMount(){
    fetch(`http://localhost:4000/dogs`)
    .then(res => res.json())
    .then(dogs => this.setState({ dogs }))
  }

  dogSwitch = (dog) => {
    this.setState({ dog })
  }

  changeGoodness = (dog) => {
    const newDog = {...this.state.dog}
    newDog.isGoodDog = !newDog.isGoodDog
    this.setState({ dog: newDog })
  }

  render() {
    return (
      <div>
        <DogList dogs={this.state.dogs} dogSwitch={this.dogSwitch}/>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <DogInfo dog={this.state.dog} changeGoodness={this.changeGoodness}/>
        </div>
      </div>
    );
  }
}

export default App;
