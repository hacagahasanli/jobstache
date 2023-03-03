import styled from "styled-components"
import { logojs, textlogo } from "../../assets"


export const Header = () => {
    return <StyledHeader>
        <div>
            <img src={logojs} alt="logojs" width={40} />
            <img src={textlogo} alt="textlog" />
        </div>
    </StyledHeader>

}

const StyledHeader = styled.header`

    width: 100%;
    min-height: 4.2rem;
    background: transparent;
    margin-bottom: 5rem;

    div{
        position: relative;
        top: 1.2rem;
        max-width: max-content;
        display: flex;
        align-items: center;
        gap:0.8rem;
    }
`