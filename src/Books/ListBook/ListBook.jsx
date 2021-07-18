import React from 'react'
import BookCard from './BookCard/BookCard'
import { Container,Row } from 'react-bootstrap'
// import { Router } from 'react-router'
const ListBook = (props) => {
    return (
       
        <Container fluid className='m-3 mt-5'>
            <Row className=''>
                {
                    props.books.map((book, i) =>{
                        return <BookCard 
                                    className='row'
                                    key={i}
                                    id={book.id}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    categories={book.volumeInfo.categories}
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    date={book.volumeInfo.publishedDate}
                                />
                })
            }
            </Row>
        </Container>
        
    )
}

export default ListBook