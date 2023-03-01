import { Button, Form, InputGroup } from "react-bootstrap"
import styled from "styled-components"

const { Control } = Form

export const Input = () => {
    return <InputGroup className="mb-3 justify-content-center">
        <StyledControl
            placeholder="Job alerts straight to your inbox"
            aria-label="Job alerts straight to your inbox"
            aria-describedby="basic-addon2"
        />
        <GotItButton>Hear about it first</GotItButton>
    </InputGroup>
}

const StyledControl = styled(Control)`
    background:${({ theme }) => theme.colors.darkBlue} !important;
    color: white !important;
    border: 1px solid #a1a1a1;
    max-width: 35%;
`

const GotItButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border: none;
    outline: none;
    font-size: .9rem;
    font-weight: 700;
    padding: .6rem 1.4rem;

`