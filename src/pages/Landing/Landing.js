import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageChooser from "../../components/LanguageChooser/LanguageChooser";


const Landing = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Row>
                <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }} sm={{ span: 12, offset: 0 }}>
                    <div className="landingMain">
                        <span>{t('welcome')}</span>
                        <span>{t('start')}</span>

                        <div className="pokeball">
                            <Link className="App-link" to={`/pokedex`}>
                                <button></button>
                            </Link>
                        </div>

                    </div>
                </Col>
                <Col>
                    <LanguageChooser page={"landing"} />
                </Col>
            </Row>
        </Container>
    )

};


export default Landing;