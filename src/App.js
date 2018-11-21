import React, { Component } from 'react';
import GameInfo from './js/GameInfo.js';
import SearchBar from './js/SearchBar.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData=(searchText="") => {
        fetch(`https://api-endpoint.igdb.com/games/?search=${searchText}&fields=*`, {
            headers:{
                "user-key": "5fa4756bce95b77fb9f7a336676d6aec",
                "Accept": "application/json"
            }

        })
            .then(resp => {
                if(resp.ok) {
                    return resp.json();
                }
                else
                    throw new Error ("Błąd sieci");
            })
            .then(data => {
                console.log(data);
                this.setState({
                    data: data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

      render(){
              return (
                  <div className="Ap">
                    <GameInfo gameList={this.state.data}/>
                    <SearchBar/>
          </div>
      )
      }
}

export default App;
