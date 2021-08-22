import React from "react";
import "./App.css";
import Person from "./Person";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleButton = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    console.log("renderParent()");
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleButton}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          {this.state.show ? (
            <>{this.state.show && <Person />}</>
          ) : (
            <h3 style={{ color: "black" }}>
              Click the button to display portfolio
            </h3>
          )}
        </header>
      </div>
    );
  }
}

export default App;
