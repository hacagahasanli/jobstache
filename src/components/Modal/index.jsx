import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { showModal } from "../../store/slices"
import { StyledLogo } from "../styled-components"

const { Header, Body } = Modal

export const JobDetailModal = ({ show = false }) => {
    const dispatch = useDispatch();
    const { jobDetail } = useSelector(state => state.job)

    const hideModal = () => dispatch(showModal(false))

    const {
        job_title,
        job_id,
        employer_name,
        job_description,
        job_min_salary,
        job_max_salary,
        job_salary_currency,
        job_country,
        job_state,
        job_city,
        job_salary_period,
        employer_logo
    } = jobDetail
    const joBHandler = (job) => {
        // JSON.stringify(job).split('').map((item) => console.log(item));
    }
    return <DetailModal size="lg" show={show} onHide={hideModal} >
        <DetailHeader closeButton>
            <StyledLogo src={employer_logo} alt="employe_logo" />
            <h3>{job_title}</h3>
            <h6>{employer_name}</h6>
        </DetailHeader>
        <Body style={{ padding: 0 }}>
            <JobDetail>
                {job_description}
            </JobDetail>
        </Body>
    </DetailModal>
}

const JobDetail = styled.pre`
    color:#cfcfcf;
    white-space: pre-wrap;
    margin: 1rem 0 0 0;
    word-wrap: break-word;
    line-height: 0.8rem;
    font-weight: 600;
    overflow: hidden;
`

const DetailModal = styled(Modal)`
    background-color: rgb(0,0,0,0.6);
    .modal-content,.modal-header,.modal-dialog{
        background: transparent;
        border: 1px solid transparent;
    }
    .btn-close{
        position: absolute;
        right: 1rem;
        top:1rem;
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

   h6{
     padding: 0;
     margin: 0;
     color: ${({ theme }) => theme.colors.lightBlue};
  }
`