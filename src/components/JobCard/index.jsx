import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { defaultJobs } from '../../constants';

const { Title, Subtitle, Text, Link, Body } = Card;
let unknownSalary = "Undisclosed";
let worldWide = "Worldwide";

export const JobCard = () => {
    return <>
        {
            defaultJobs?.map(({ job_title, job_id, employer_name, job_description }) => {
                let jobDescription = job_description
                if (job_description?.length > 130) jobDescription = `${job_description.substring(0, 130)} ...`



                return <StyledCard key={job_id} style={{ maxWidth: '32rem', backgroundColor: "#15537d" }} className="mb-3">
                    <Body style={{ cursor: "pointer" }}>
                        <Title style={{ color: "#BBE1FA", fontWeight: "700", cursor: "pointer" }}>{job_title}</Title>
                        <Subtitle style={{ fontWeight: "700", color: "#1894e6", cursor: "pointer" }} className="mb-2">{employer_name}</Subtitle>
                        <Text style={{ fontSize: ".9rem", fontWeight: "600", color: "#ffffff", cursor: "pointer" }}>{jobDescription}</Text>
                        <FooterDetails>
                            <SingleDetail>
                                <span class="material-symbols-rounded" style={{ fontSize: "1rem", color: "#FFD43B", fontWeight: "600" }}>
                                    location_on
                                </span>
                                <Text>{worldWide}</Text>
                            </SingleDetail>
                            <SingleDetail>
                                <span class="material-symbols-rounded" style={{ fontSize: "1rem", color: "#529f61", fontWeight: "600" }}>
                                    monetization_on
                                </span>
                                <Text>{unknownSalary}</Text>
                            </SingleDetail>
                        </FooterDetails>
                    </Body>
                </StyledCard>
            })
        }
    </>
}

const FooterDetails = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
    cursor: pointer;
`

const SingleDetail = styled.div`
    display: flex;
    align-items: center;
    gap:0.2rem;
    color:#e5e5e5;
    font-weight: 600;
    font-size: 0.8rem;
`

const StyledCard = styled(Card)`
    min-width: 49%;
    border-radius: 10px;
    border: 1px solid #2b6690;
    cursor: pointer;
    transition: scale 0.2s;
    :hover{
        scale:1.02;
    }
        /* padding: 0 0 1.5rem 1rem; */
`