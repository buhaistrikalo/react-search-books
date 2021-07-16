import React, { Component } from 'react'
import Search from './Search/Search'
import request from 'superagent'
import ListBook from './ListBook/ListBook';

export default class Books extends Component { //
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                this.setState({ books: [...data.body.items]})
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        return (
            <div>
                <Search searchBook={this.searchBook} handleSearch={this.handleSearch}/>
                <ListBook books={this.state.books}/>
            </div>
        )
    }
}
