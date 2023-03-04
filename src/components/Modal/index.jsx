import { useState } from "react"
import { Modal } from "react-bootstrap"

const { Header, Body } = Modal

export const JobDetailModal = ({ handeShowModal, show }) => {
    console.log(show, "show")
    return <Modal show={show} onHide={handeShowModal} >
        <Header closeButton>IT is the Header</Header>
    </Modal>
}