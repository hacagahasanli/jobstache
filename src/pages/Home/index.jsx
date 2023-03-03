import React, { useState } from 'react'
import styled from 'styled-components'
import image from "../../assets/svgs/brands.svg"
import { Button, Col, Container, Row } from 'react-bootstrap'
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
                        <StyledCol>
                            <UploadMore variant="primary">Load more</UploadMore>
                        </StyledCol>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

const UploadMore = styled(Button)`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border: none;
    outline: none;
    font-size: .9rem;
    font-weight: 700;
    padding: .6rem 1.9rem;
    transform: translateX(83%);
    cursor: pointer !important;
    
`

const StyledCol = styled(Col)`
    display: flex;
    justify-content: center;
    padding: 2rem 0 2rem 0;

`

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



