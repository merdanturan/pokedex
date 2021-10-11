import React, { useState, useEffect } from 'react';
import './style.css'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonList } from "../../store/actions/index";
import { ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Spinner, Button, Container, Row, Col } from 'react-bootstrap';



const Pokedex = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);
  const [load, setLoad] = useState(2)


  ////First Get
  useEffect(() => {
    FetchData(1)
  }, []);
  ///////


  ///Load More
  const loadMore = () => {
    setLoad(load + 1)
    FetchData(load);
  }

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page))
  }
  //////


  ////Loading
  if (pokemonList.loading) {
    return (
      <>
        <Header />
        <Spinner animation="grow" />
      </>
    )
  }
  //////

  ///Error Message 
  if (pokemonList.errorMsg !== "") {
    return <p>{pokemonList.errorMsg}</p>
  }
  /////


  //////List Of Pokemons
  if (pokemonList.length !== 0) {
    return (
      <div className="pokedexContainer">
        <Header />
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
              <ListGroup>
                {pokemonList.data.map((pokemon) =>
                  <Link to={`/pokemon/${pokemon.name}`} className="navLink">

                    <ListGroup.Item>
                      {pokemon.name.toUpperCase()}
                    </ListGroup.Item>

                  </Link>
                )}
              </ListGroup>
              <div className="d-grid gap-2">
              <Button onClick={loadMore} variant="outline-danger" size="lg">Load More</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
  //////
}

export default Pokedex
