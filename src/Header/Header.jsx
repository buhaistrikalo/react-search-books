import { Navbar, Container } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <i className="fas fa-book-dead"></i>
                    <span style={{margin:'10px'}}>Search for books</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header