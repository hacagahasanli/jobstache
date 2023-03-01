import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header, LandingIntro } from '../../components'
// import { useGetSearchedPostsQuery } from '../../client'

export default function Home() {
    // const { data, isError, error, isLoading } = useGetSearchedPostsQuery()

    return (
        <>
            <Container fluid>
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



