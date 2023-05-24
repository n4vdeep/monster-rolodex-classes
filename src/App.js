import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      // searchField to start as empty string
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
      () => {
        console.log(this.state);
      }
    ));
  }

  // Storing onChange functionality
  // so as to not have to keep initialising it
  onSearchChange = (event) => {
    // store user input into variable
    const searchField = event.target.value;

    this.setState(
      () => {
        return { searchField };
    });
  }

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // using filter() iterate over monsters based on
    // convert input to all to lowercase
    // return new array with +/- user inputs
    // store it in variable
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters...' 
          onChange={onSearchChange}
        />
        {/* map over new array*/ filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
