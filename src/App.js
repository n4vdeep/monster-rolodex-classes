import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: "Sarah",
        lastName: "O'Connor",
      },
      company: "MethodSVR",
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi I'm {this.state.name.firstName} {this.state.name.lastName}, and I
            work at {this.state.company}.
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Nav", lastName: "Dhamu" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
