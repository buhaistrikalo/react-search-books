import React from 'react'
//import './BookCard.css'
import { Card, Col } from 'react-bootstrap';

const BookCard = (props) => {
    return (
        // <div className='card'>
        //     <img src={props.image} alt="" />
        //     <div className="info">
        //         <h3>{props.autor}</h3>
        //         <h2>{props.title}</h2>
        //         <div className='date'>{props.date}</div>
        //         <div className='catygory'>{props.category}</div>
        //     </div>
        // </div>
        <Col className='d-flex align-items-stretch '>
            {/* <Card className='border-secondary mb-3' style={{ width: '16rem', height: ''}}></Card> */}
            <Card className='d-md-flex border-secondary mb-3 shadow' style={{ width: '16rem', height: ''}}>
                <Card.Img  className='shadow-sm' variant="top"  src={props.image} style={{height: '320px'}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className=''>
                        <small>
                            { 
                                props.authors.map((author,i)=> {
                                    if (i < props.authors.length-1) { 
                                        author += ', ' 
                                    }

                                    return author
                                })
                            }
                        </small>
                    </Card.Text>
                    <Card.Text className='fs-6 align-bottom text-muted'>{props.date}</Card.Text>
                    
                </Card.Body>
                <Card.Footer>{props.categories}</Card.Footer>
            </Card>
        </Col>
    )
}

export default BookCard