import React, { Component } from 'react'

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }

    render() {
        const games = this.props.wishlist.map(game => {
            return <li key={game.id}>
            {game.name}<br />
            </li>
        })
        return (
            <div className="magicalWishlist">
            <p>Gaming wishlist for X-Mas</p>
                <ol>
                                                            {games}
                </ol>
            <button className="button1">Download to PDF</button>
            <button className="button1">Send to... </button>
            </div>
    )
    }
}

export default WishList;