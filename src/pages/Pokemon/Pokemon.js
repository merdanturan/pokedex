import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../../store/actions/index";
import { Container, Row, Col, Spinner, Table, Carousel } from 'react-bootstrap'
import Header from '../../components/Header/Header';

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);
    console.log(pokemonState)
    useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, []);

    ////Loading
    if (pokemonState.loading) {
        return (
            <>
                <Header />
                <Spinner animation="grow" />
            </>
        )
    }
    //////

    ///Error Message
    if (pokemonState.errorMsg !== "") {
        return (
            <div className="pokedexContainer">
                <Header />
                <h4>{pokemonState.errorMsg}</h4>
            </div>
        )
    }
    /////


    ///Pokemon Details
    if (pokemonState.length !== 0) {
        const pokeData = pokemonState.data[pokemonName];
        return (
            <div className="pokedexContainer">
                <Header />
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                            <h1>{pokemonName.toUpperCase()}</h1>

                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50"
                                        src={pokeData?.sprites?.front_default}
                                        alt="front default"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50"
                                        src={pokeData?.sprites.back_default}
                                        alt="back default"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50"
                                        src={pokeData?.sprites.front_shiny}
                                        alt="front shiny"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-50"
                                        src={pokeData?.sprites.back_shiny}
                                        alt="back shiny"
                                    />
                                </Carousel.Item>
                            </Carousel>

                        </Col>


                        <Col lg={6} md={6} sm={12}>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Stats</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pokeData?.stats.map(poke => {
                                        return (
                                            <tr>
                                                <td>{poke.stat.name}</td>
                                                <td>{poke.base_stat}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default Pokemon