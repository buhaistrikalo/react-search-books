import React from 'react'
import './Search.css'
import { Form, Button, FormControl } from 'react-bootstrap'
const Search = (props) => {
    return (
        <Form className="d-flex col-md-5 mx-auto mt-3 mr-3 ml-3" onSubmit={props.searchBook}>
            
            <FormControl
                type="search"
                placeholder="Search book"
                className="mr-2 "
                aria-label="Search"
                onChange={props.handleSearch}
            />
           
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
        // <div className="search-area">
        //     <form onSubmit={props.searchBook} action="">
        //         <input type="text" onChange={props.handleSearch}/>
        //         <button type='submit'>Search</button>
        //     </form>
            
        // </div>
    )
}

export default Search