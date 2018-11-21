import React from "react";

class GameInfo extends React.Component {

    render() {
            return (
                <ul>
                {this.props.gameList.map(game => {
                    return (
                        <li key={game.id}>{game.name}</li>
                );
                })}
                </ul>
        );
        }
}

export default GameInfo;