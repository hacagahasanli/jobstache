import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useGetSearchedPostsQuery } from '../../client'

export default function Home() {

    // const { data, isError, error, isLoading } = useGetSearchedPostsQuery();

    // console.log(data, "DATA")

    return (
        <Container>
            <Row>

            </Row>
            <Row>
                <Col style={{ background: "red" }}>1 of 3</Col>
                <Col xs={8} style={{ background: "green" }}>1 of 3</Col>
                <Col style={{ background: "blue" }}>1 of 3</Col>
            </Row>
        </Container >
    )
}



