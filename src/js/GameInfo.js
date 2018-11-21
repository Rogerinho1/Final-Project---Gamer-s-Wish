import React from "react";

class GameInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: false
        }
}

    componentDidMount(){
        fetch(`https://api-endpoint.igdb.com/games/1942,1943,5,6,7,8,9,100,120,150,175,2500,5000,10000,50000,112429?fields=*`, {
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

    render() {
        if (!this.state.data){
            return <div>Ładuję...</div>;
        }else{
            return (
                <ul>
                {this.state.data.map(game => {
                    return (
                        <li key={game.id}>{game.name}</li>
                );
                })}
                </ul>
        );
        }

    }
}

export default GameInfo;