import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(obj => this.setState({ robots: obj }))
      .catch(this.setState({ robots: [] }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const { searchField, robots } = this.state;
    const filteredRobots = robots.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      (!robots.length) ? 
      <h1 className="f1 tc">Load...</h1> :
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;