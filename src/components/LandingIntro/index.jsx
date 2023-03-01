import styled from "styled-components"

export const LandingIntro = () => {
    return <LandingContainer>
        <DetailsContainer>
            <h2>Hand-picked jobs for<span> developers</span></h2>
            <p>The best opportunities in some of the best companies
                so you find the job that's right for you.</p>
        </DetailsContainer>
    </LandingContainer>
}


const LandingContainer = styled.div`
    width: 100%;
    min-height: 10rem;
    color: ${({ theme }) => theme.colors.whiteBlue};
`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p{
        display: block;
        width: 30%;
        text-align: center;
        color: ${({ theme }) => theme.colors.whiteBlue};;
    }

    h2{
        font-size: 3rem;
        font-weight: 800;
        span{
            color:${({ theme }) => theme.colors.lightBlue}
        }
    }
`