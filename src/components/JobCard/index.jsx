import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { defaultJobs } from '../../constants';

const { Title, Subtitle, Text, Link, Body } = Card;
let unknownSalary = "Undisclosed";
let unknownLocation = "World Wide";

export const JobCard = () => {
    return <>
        {
            defaultJobs?.map(({ job_title, job_id, employer_name, job_description }, index) => {
                let jobDescription = job_description
                if (job_description?.length > 120) jobDescription = job_description.substring(0, 120) + "..."

                return <StyledCard key={job_id} style={{ maxWidth: '32rem', backgroundColor: "#15537d" }} className="mb-3">
                    <Body>
                        <Title style={{ color: "#BBE1FA", fontWeight: "700" }}>{job_title}</Title>
                        <Subtitle style={{ fontWeight: "700", color: "#0a2a3f" }} className="mb-2">{employer_name}</Subtitle>
                        <Text style={{ fontSize: "1rem", fontWeight: "600", color: "#dddddd" }}>{jobDescription}</Text>
                        <FooterDetails>
                            <SingleDetail>
                                <span class="material-symbols-rounded" style={{ fontSize: "1rem", color: "#FFD43B", fontWeight: "700" }}>
                                    location_on
                                </span>
                                <Text>Worldwide</Text>
                            </SingleDetail>
                            <SingleDetail>
                                <span class="material-symbols-rounded" style={{ fontSize: "1rem", color: "#529f61", fontWeight: "700" }}>
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
`

const SingleDetail = styled.div`
    display: flex;
    align-items: center;
    gap:0.2rem;
    color:#477fa4;
    font-weight: 600;
`

const Icon = styled.span`
    
    
`
const StyledCard = styled(Card)`
    min-width: 100%;
    border-radius: 10px;
    border: 1px solid #6a6969;
        /* padding: 0 0 1.5rem 1rem; */
`