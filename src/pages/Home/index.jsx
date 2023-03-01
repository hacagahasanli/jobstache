import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Header, LandingIntro } from '../../components'
import image from "../../assets/brands.svg"
// import { useGetSearchedPostsQuery } from '../../client'

export default function Home() {
    // const { data, isError, error, isLoading } = useGetSearchedPostsQuery()

    return (
        <>
            <Container fluid>
                <BackroundImage src={image} alt="sadsa" />
                <Header />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <LandingIntro />
                        </Col>
                    </Row>
                    <Row xs={8}>
                        <Col style={{ background: "red" }}>1 of 3</Col>
                        <Col style={{ background: "green" }} xs={8}>1 of 3</Col>
                        <Col style={{ background: "blue" }}>1 of 3</Col>
                    </Row>
                </Container>
            </Container >
        </>
    )
}

const BackroundImage = styled.img`
    /* background-image: url("../../assets/brands.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    object-fit: contain;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    /* z-index: -1; */
    opacity: 0.02;
`



