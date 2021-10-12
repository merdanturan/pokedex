import React, { useEffect } from 'react';
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ListGroup } from 'react-bootstrap'
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { GetPokemonList } from "../../store/actions/index";
import Header from '../../components/Header/Header'
import ReactPaginate from "react-paginate";




const Pokedex = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);

  ///Language Support
  const { t } = useTranslation();


  ////First Get
  useEffect(() => {
    FetchData(1)
  }, []);
  ///////


  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page))
  }



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

                <ReactPaginate
                  previousLabel={t('previous')}
                  nextLabel={t('next')}
                  pageCount={Math.ceil(pokemonList.count / 15)}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  onPageChange={(data) => FetchData(data.selected + 1)}
                  containerClassName={"pagination"}
                  pageClassName={"paginationList"}
                />

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
