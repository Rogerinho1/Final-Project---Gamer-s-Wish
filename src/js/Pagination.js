import React, { Component } from 'react'

class Pagination extends Component {

    previousPage = (event) => {
       if (this.props.page > 1){
           this.setState({
               page: this.props.updateData(null, this.props.page -10)
           })
       }

    }

    nextPage = (event) => {
        this.setState({
            page: this.props.updateData(null, this.props.page +10)
        })
    }


    render(){
        return (
            <div className="pagination">
            <button className="btn2" onClick={this.previousPage}>Back</button>
            <button className="btn" onClick={this.nextPage}>Next</button>
            </div>
        )
    }
}

export default Pagination;