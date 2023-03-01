import styled from "styled-components"
import { Row, Col } from "react-bootstrap"

export const Header = () => {
    return <StyledHeader>
        <span>Jobcaches</span>
    </StyledHeader>
}

const StyledHeader = styled.header`
    width: 100%;
    min-height: 4.2rem;
    background: transparent;
    display: flex;
    align-items: center;
     
    span{
        color: #ffffff;
        font-family: sans-serif;
        margin-left: 3rem;
        font-size:2rem;
        font-weight: 700;
    }
`