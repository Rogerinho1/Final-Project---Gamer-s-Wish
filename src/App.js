import React, { Component } from 'react';
import GameInfo from './js/GameInfo.js';
import SearchBar from './js/SearchBar.js';

class App extends Component {

      render(){
              return (
                  <div className="Ap">
                    <GameInfo/>
                    <SearchBar/>
          </div>
      )
      }
}

export default App;
