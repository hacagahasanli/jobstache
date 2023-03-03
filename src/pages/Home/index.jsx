import React, { useState } from 'react'
import styled from 'styled-components'
import image from "../../assets/svgs/brands.svg"
import { Col, Container, Row } from 'react-bootstrap'
import { useGetSearchedPostsQuery } from '../../client'
import { Header, LandingIntro, JobCard } from '../../components'
import { defaultJobs } from '../../constants'

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
                        <LandingIntro />
                    </Row>
                    <Row>
                        <JobCard jobs={defaultJobs} />
                    </Row>
                </Container>
            </Container>
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



