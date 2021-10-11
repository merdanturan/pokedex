import React, {useState} from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();
    const [search, setSearch] = useState("");

    const handleSubmit = (e) =>{
        history.push(`/pokemon/${search}`)
        e.preventDefault()
    }

    return (
        <>
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/pokedex" >Pokédex</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0 me-auto"
                >
                    <Nav.Link href="/pokedex">Home</Nav.Link>
                    <Nav.Link href="/mypokemons">My Pokémons</Nav.Link>
                    <Nav.Link href="/catch">Catch'em</Nav.Link>
                </Nav>
                <Form className="d-flex mx-5" onSubmit={handleSubmit}>
                    <FormControl
                        type="search"
                        placeholder="Search Pokémons"
                        className="mr-2"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant="outline-danger">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Header
