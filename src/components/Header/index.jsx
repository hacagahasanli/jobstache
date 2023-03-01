import styled from "styled-components"

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
    margin-bottom: 4rem;
     
    span{
        color: ${({ theme }) => theme.colors.whiteBlue};
        font-family: sans-serif;
        margin-left: 3rem;
        font-size:2rem;
        font-weight: 800;
    }
`