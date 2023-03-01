import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Header, LandingIntro, JobCard } from '../../components'
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
                    <Row>
                        <Col style={{ background: "red" }} xs={2}>1 of 3</Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={6}><JobCard /></Col>
                                <Col xs={6}><JobCard /></Col>
                            </Row>
                            <Row>
                                <Col xs={6}><JobCard /></Col>
                                <Col xs={6}><JobCard /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container >
        </>
    )
}

const BackroundImage = styled.img`
    object-fit: contain;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.02;
`



