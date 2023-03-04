import styled from "styled-components";

export const StyledLogo = styled.img`
        width:50px;
        height:50px;
        object-fit: contain;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.darkBlue};
` 