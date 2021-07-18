import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import request from 'superagent';

export default class BookDetail extends Component {
    constructor(props){
        super(props);

        //const book = this.searchBook(props.match.params.id)
        this.state = {
            book: []
        }
    }

    // searchBook = (bookID) => {
    //     request
    //         .get(`https://www.googleapis.com/books/v1/volumes/${bookID}`)
    //         .then((data) => {
    //             console.log(data)
    //             return data
    //         })
    // }
    
    render() {
        //this.changeBook()
        // console.log(this.state)
        return (
            <div>
                
            </div>
        )
    }
}
