import { Stack } from "react-bootstrap"
import styled from "styled-components"
import { Input } from "../Input"

export const LandingIntro = ({ getSearchedPosts }) => {
    return (
        <LandingContainer gap={4} className="col-md-12 mx-auto">
            <DetailsContainer>
                <h2>Hand-picked jobs for<span> developers</span></h2>
                <p>The best opportunities in some of the best companies
                    so you find the job that's right for you.</p>
            </DetailsContainer>
            <div>
                <Input {...{ getSearchedPosts }} />
                <TinyInfo>300+ developers already signed up!</TinyInfo>
            </div>
        </LandingContainer>
    )
}

const TinyInfo = styled.span`
    padding: 0;
    margin:0;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: smaller;
    font-weight: 600;
    color:#8c8a8a ;
    /* ${({ theme }) => theme.colors.whiteBlue} */
`
const LandingContainer = styled(Stack)`
    color: ${({ theme }) => theme.colors.whiteBlue};
    margin-bottom: 4rem;
`
const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom:2rem;

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