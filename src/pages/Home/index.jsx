import React from 'react'
import styled from 'styled-components'
import image from "../../assets/svgs/brands.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { useGetSearchedPostsQuery } from '../../client'
import { Header, LandingIntro, JobCard } from '../../components'

export default function Home() {
    const { data: jobs, isError, error, isLoading } = useGetSearchedPostsQuery()
    return (
        <>
            <Container>
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
                        <CardContainer xs={10}>
                            <JobCard jobs={jobs?.data} />
                        </CardContainer>
                    </Row>
                </Container>
            </Container >
        </>
    )
}

const CardContainer = styled(Col)`
    display: flex;
    column-gap: 0.9rem;
    flex-wrap: wrap;
`

const BackroundImage = styled.img`
    object-fit: contain;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.02;
`



