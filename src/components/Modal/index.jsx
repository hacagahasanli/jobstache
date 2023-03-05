import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { showModal } from "../../store/slices"
import { StyledLogo } from "../styled-components"
import { v4 } from "uuid"

const { Header, Body } = Modal

export const JobDetailModal = ({ show = false }) => {
    const dispatch = useDispatch();
    const { jobDetail } = useSelector(state => state.job)

    const hideModal = () => dispatch(showModal(false))

    const {
        job_title,
        employer_name,
        job_description,
        employer_logo,
        job_apply_link,
        employer_website,
        job_highlights
    } = jobDetail

    return <DetailModal size="lg" show={show} onHide={hideModal} >
        <DetailHeader closeButton>
            <StyledLogo src={employer_logo} alt="employe_logo" />
            <h3>{job_title}</h3>
            <div>
                <h5>{employer_name}</h5>
                {employer_website && <a href={employer_website} style={{ color: "#3282BB" }}>{employer_website}</a>}
            </div>
        </DetailHeader>
        <Body style={{ padding: 0 }}>
            <JobDetail>{job_description}</JobDetail>
            <Qualification>
                {job_highlights?.Qualifications && <h2>Qualifications</h2>}
                {job_highlights?.Qualifications?.map((item) => <QualificationItem key={v4()}>• {`${item}`}</QualificationItem>)}
            </Qualification>
            <Qualification>
                {job_highlights?.Responsibilities && <h2>Responsibilities</h2>}
                {job_highlights?.Responsibilities?.map((item) => <QualificationItem key={v4()}>• {`${item}`}</QualificationItem>)}
            </Qualification>
            <Button variant="primary" style={{ marginTop: "2rem" }}>
                <a href={job_apply_link} style={{ textDecoration: "none", color: "#ffffff", fontWeight: "600" }}>
                    Apply now
                </a>
            </Button>
        </Body>
    </DetailModal>
}
const Qualification = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Golos Text', sans-serif;

    h2 {
        margin: 1rem 0;
        font-size: 1.5rem;
        color:#3282BB;
        font-weight: 700;

    }
`

const QualificationItem = styled.span`
    color:#ffffff;
    font-size: 1.1rem;
    font-weight: 500;
    opacity: 0.9;

`

const JobDetail = styled.pre`
    color:#ffffff;
    opacity: 0.9;
    white-space: pre-wrap;
    margin: .8rem 0 0 0;
    word-wrap: break-word;
    line-height: 0.98rem;
    font-weight: 500;
    font-size: 1.1rem;
    tab-size: 21;
    overflow: hidden;
    font-family: 'Golos Text', sans-serif;
    /* &:hover, &:focus { width: min-content; } */
`

const DetailModal = styled(Modal)`
    background-color: rgb(0,0,0,0.6);
    font-family: 'Golos Text', sans-serif;
    .modal-content,.modal-header,.modal-dialog{
        background: transparent;
        border: 1px solid transparent;
    }
    .btn-close{
        position: absolute;
        right: 1rem;
        top:1rem;
        background-color: #ffffff !important;
    }
`

const DetailHeader = styled(Header)`
    background-color: transparent !important;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap:0.2rem;
    padding: 0;
    margin: 0;

    h3{
      padding: 0;
      margin: 0;
      color:  ${({ theme }) => theme.colors.whiteBlue};
    }

   h5{
     padding: 0;
     margin: 0;
     color: ${({ theme }) => theme.colors.lightBlue};
  }
`