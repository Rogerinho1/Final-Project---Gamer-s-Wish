import React, { Component } from 'react';
import GameInfo from './js/GameInfo.js';
import SearchBar from './js/SearchBar.js';
import WishList from './js/WishList.js';
import Pagination from './js/Pagination.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchText: "",
            page: 0,
            wishlist:[]
        }
    }

    transfer = (game) => {
        this.setState({
            wishlist: [...this.state.wishlist, game]
        });
    }

    componentDidMount(){
        this.getData()
    }

    getData=(searchText=null, page=null) => {
        this.setState({
            searchText: searchText !== null ? searchText : this.state.searchText,
            page: page !== null ? page : this.state.page
        }, ()=>{
            fetch(`https://api-endpoint.igdb.com/games/?search=${this.state.searchText}&limit=7&offset=${this.state.page}&fields=*&`, {
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
        })

    };

      render(){
              return (
                  <div className="Ap">
                    <SearchBar searchGame={this.getData}/>
                    <br />
                    <GameInfo gameList={this.state.data} moveList={this.transfer}/>
                    <br />
                    <Pagination updateData={this.getData} page={this.state.page}/>
                    <br />
                    <WishList wishlist={this.state.wishlist} />
                  </div>
                    )
              }
}

export default App;
