import { Component } from "react";
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    /*
      using filter() iterate over monsters based on
      convert input to all to lowercase
      return new array with +/- user inputs
      store it in variable
    */
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='Search monsters...'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
