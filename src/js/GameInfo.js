import React from "react";

class GameInfo extends React.Component {
    clickHandler = (game)=>{
        this.props.moveList(game);
    }
    render() {
            return (
                <div className="gameList">
                <ul className ="prettyList">
                {this.props.gameList.map(game => {
                    return (
                        <li key={game.id}>{game.name}<br /><button className="addGameBtn" onClick={e => this.clickHandler(game)}>ADD</button></li>
                );
                })}
                </ul>
                </div>
        );
        }
}

export default GameInfo;