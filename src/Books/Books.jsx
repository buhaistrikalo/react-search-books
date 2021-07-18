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
            sort: 'relevance',
            catygory: 'all',
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .query({ orderBy: this.state.sort})
            .then((data) => {
                this.setState({ books: [...data.body.items]})
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    handleSort = (e) =>{
        this.setState({ sort: e.target.value})     
    }

    

    render() {
        return (
            <div>
                <Search searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                <ListBook books={this.state.books}/>
            </div>
        )
    }
}
