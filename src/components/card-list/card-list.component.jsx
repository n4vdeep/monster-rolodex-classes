import { Component } from 'react';
import '../card-component/card-container.component';
import './card-list.styles.css';
import CardComponent from '../card-component/card-container.component';

class CardList extends Component {
  render() {
    console.log('render from card-list');

    const { monsters } = this.props;
    
    return (
      <div className='card-list'>
        {monsters.map(monster => {
          return (
            <CardComponent monster={monster}/>
        )})};
      </div>
    );
  }
}

export default CardList;