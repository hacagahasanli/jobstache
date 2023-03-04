import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import image from "../../assets/svgs/brands.svg"
import { Button, Col, Container, Modal, Row, Spinner } from 'react-bootstrap'
import getJobsApi, { useGetSearchedPostsQuery } from '../../client'
import { Header, LandingIntro, JobCard } from '../../components'
import { defaultJobs } from '../../constants'
import { Sidebard } from '../../shared'

export default function Home() {
    // const { data: jobs, isError, error, isLoading } = useGetSearchedPostsQuery()
    const [getSearchedPosts, { isLoading, isFetching, isError, data: jobs, error }] = getJobsApi.endpoints.getSearchedPosts.useLazyQuery()

    // useEffect(() => {
    //     getSearchedPosts()
    // }, [])

    const loadedComponent = (isLoading || isFetching) ? <JobSpinner /> : <JonDatas jobs={jobs?.data} />;

    return (
        <>
            <Container >
                <BackroundImage src={image} alt="sadsa" />
                <Header />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <LandingIntro {...{ getSearchedPosts }} />
                        </Col>
                    </Row>
                    <Row>
                        <Sidebard />
                        {loadedComponent}
                    </Row>
                </Container>
            </Container>
        </>
    )
}

const JonDatas = ({ jobs }) => {
    return <>
        <CardContainer xs={10}>
            <JobCard {...{ jobs }} />
        </CardContainer>
        <StyledCol>
            <UploadMore variant="primary">Load more</UploadMore>
        </StyledCol>
    </>

}

const JobSpinner = () => {
    return <SpinnerContainer >
        <LoadingSpinner animation="grow" />
    </SpinnerContainer >
}

const LoadingSpinner = styled(Spinner)`
    background: white;
    width: 60px;
    height:60px;
`

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
`

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



    // console.log(defaultJobs, "DEFAULT JOBS");
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //     </Modal.Header>
    //     Hakdljadadk
    // </Modal>