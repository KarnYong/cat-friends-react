import React, {Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

class CardList extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cats: users}));
  }

  render() {
    const {cats, searchfield} = this.state;
    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchfield.toLowerCase());
      })

    return (<div className='tc'>
      <h1 className='f1'>Cat Friends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      {
        filteredCats.map((user, i) => {
          return (
            <Card
              key={filteredCats[i].id}
              id={filteredCats[i].id}
              name= {filteredCats[i].name}
              email={filteredCats[i].email}
            />
          );
        })
      }
  </div>);
  }
}

export default CardList;
