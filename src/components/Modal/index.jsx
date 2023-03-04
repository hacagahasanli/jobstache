import { useState } from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"
import { StyledLogo } from "../styled-components"

const { Header, Body } = Modal

export const JobDetailModal = ({ handleShowModal, detail, show }) => {
    // const isVisible = Object.keys(detail).length !== 0;
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
    } = detail

    return <DetailModal size="lg" show={show} onHide={handleShowModal} >
        <DetailHeader closeButton>
            <StyledLogo src={employer_logo} alt="employe_logo" />

        </DetailHeader>
    </DetailModal>
}

const DetailModal = styled(Modal)`
    background-color: transparent;
    .modal-content,.modal-header,.modal-dialog{
        background: transparent;
    }
`

const DetailHeader = styled(Header)`
    background-color: transparent !important;
`