import React, { useState } from 'react'
import styled from 'styled-components'
import image from "../../assets/svgs/brands.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { useGetSearchedPostsQuery } from '../../client'
import { Header, LandingIntro, JobCard } from '../../components'
import { defaultJobs } from '../../constants'
import { Sidebard } from '../../shared'

export default function Home() {

    // const jobs = defaultJobs;
    // const { data: jobs, isError, error, isLoading } = useGetSearchedPostsQuery()
    // console.log(defaultJobs, "DEFAULT JOBS");

    return (
        <>
            <Container >
                <BackroundImage src={image} alt="sadsa" />
                <Header />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <LandingIntro />
                        </Col>
                    </Row>
                    <Row>
                        <Sidebard />
                        <CardContainer xs={10}>
                            <JobCard jobs={defaultJobs} />
                        </CardContainer>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

const CardContainer = styled(Col)`
    display: grid;
    column-gap: 0.9rem;
    grid-template-columns: 1fr 1fr;
    place-items: center;
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



