import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: initialData
    };
  }

  handleUpdate = (id) => {
    const updatedCharacters = this.state.characters.map(char => {
      if (char.id === id) {
        const idx = char.currentIndex ?? 0;
        const nextIndex = (idx + 1) % char.images.length;
        return {
          ...char,
          currentIndex: nextIndex
        };
      }
      return char;
    });

    this.setState({ characters: updatedCharacters });
  }
  //handler for the adopt me button
  handleAdopt = id => {
    //logic: filters out where if the ID is NOT the selected ID it is kept 
    const updatedCharacters = this.state.characters.filter(char => char.id !== id);
    this.setState({ characters: updatedCharacters});
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Pet Kennel</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {this.state.characters.map(char => {
            const idx = char.currentIndex ?? 0;
            return (
              <ChildComponent 
                key={char.id}
                id={char.id}
                name={char.name}
                image={char.images ? char.images[idx] : ''}
                status={char.status ? char.status[idx] : ''}
                onAction={this.handleUpdate}
                //assigns handler to button
                adoptMe={this.handleAdopt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
