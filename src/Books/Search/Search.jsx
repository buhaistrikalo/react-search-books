import React from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'

const Search = (props) => {
    return (
        <div>
            <Form className="d-flex col-md-7 mx-auto mt-3 mr-3 ml-3" onSubmit={props.searchBook}>
            
            <FormControl
                type="search"
                placeholder="Search book"
                className="mr-2 "
                aria-label="Search"
                onChange={props.handleSearch}
            />
           
            <Button type="submit" variant="outline-success">Search</Button>

            <select defaultValue='Relevance' onChange={props.handleSort}>
                <option value="Relevance">Relevance</option>
                <option value="Newest">Newest</option>
            </select>
            <select defaultValue='All' onChange={props.handleSort}>
                <option value="all">All</option>
                <option value="art">Art</option>
                <option value="biography">Biography</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
            </select>
            </Form>
            
        </div>
        //all, art, biography, computers, history, medical, poetry

    )
}

export default Search