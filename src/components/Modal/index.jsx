import { useState } from "react"
import { Modal } from "react-bootstrap"
import styled from "styled-components"

const { Header, Body } = Modal

export const JobDetailModal = ({ handleShowModal, detail }) => {
    const isVisible = Object.keys(detail).length !== 0
    return <DetailModal show={isVisible} onHide={handleShowModal} >
        <Header closeButton>IT is the Header</Header>
    </DetailModal>
}

const DetailModal = styled(Modal)`

`