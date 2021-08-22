import React, { Component } from "react";
import "./Person.css";
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Will Smith",
      bio: "An American who has been nominated for five Golden Globe Awards and two Academy Awards, and has won four Grammy Awards. During the late 1980s, he achieved modest fame as a rapper under the name the Fresh Prince.",
      imageSrc: "./avatar.jpg",
      profession: "Actor, rapper, and film producer",
      //   interval: null,
      counter: 0,
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount()");
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }
  //   componentWillUnmount() {
  //     clearInterval(this.state.interval);
  //   }
  render() {
    return (
      <div className="container">
        <>
          <div className="image">
            <img src={this.state.imageSrc} alt="profilePic" width="100px" />
          </div>
          <div className="info">
            <h3>{this.state.fullName}</h3>
            <p>{this.state.profession}</p>
            <p>{this.state.bio}</p>
            <p className="counter">{this.state.counter}</p>
          </div>
        </>
      </div>
    );
  }
}

export default Person;
