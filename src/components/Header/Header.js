import React, { useState } from 'react'
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import LanguageChooser from '../LanguageChooser/LanguageChooser';

const Header = () => {
    const history = useHistory();
    const [search, setSearch] = useState("");
    const { t } = useTranslation();

    /////Search Link
    const handleSubmit = (e) => {
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
                        <Nav.Link href="/pokedex">{t('navbar_home')}</Nav.Link>
                        <Nav.Link href="/mypokemons">{t('navbar_mypokemons')}</Nav.Link>
                        <Nav.Link href="/catch">{t('navber_catch')}</Nav.Link>
                    </Nav>

                    <LanguageChooser />

                    <Form className="d-flex mx-5" onSubmit={handleSubmit}>
                        <FormControl
                            type="search"
                            placeholder={t('search_placeholder')}
                            className="mr-2"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button variant="outline-danger">{t('search_button')}</Button>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
