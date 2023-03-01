import Card from 'react-bootstrap/Card';
import styled, { css } from 'styled-components';
import { defaultJobs, fieldsDefaultValues } from '../../constants';

const { Title, Subtitle, Text, Link, Body } = Card;
let jobDescription, unDisclosed, worldWide, descLength = 130;

const setSalaryDetail = ({ job_max_salary, job_min_salary, job_salary_currency, job_salary_period }) => {
    const details = {
        "HOUR": `${job_min_salary}${'$'}-${job_max_salary}${'$'} per hour`,
        "YEAR": `${job_min_salary}${'k'}-${job_max_salary}${'k'} ${job_salary_currency}`,
    }
    return details[job_salary_period]
}

const jobDescShorter = (job_description) => {
    return `${job_description.substring(0, descLength)} ...`
}

export const JobCard = () => {
    return <>
        {
            defaultJobs?.map(({ job_title, job_id, employer_name, job_description, job_min_salary, job_max_salary, job_salary_currency, job_country, job_state, job_city, job_salary_period }) => {
                jobDescription = job_description;
                unDisclosed = fieldsDefaultValues?.UN_DISCLOSED;
                worldWide = fieldsDefaultValues?.WORLD_WIDE;

                if (job_description?.length > descLength) jobDescription = jobDescShorter(job_description)
                if (job_min_salary) unDisclosed = setSalaryDetail(job_max_salary, job_min_salary, job_salary_currency, job_salary_period)
                if (job_country && job_state && job_city) worldWide = `${job_country}, ${job_state}, ${job_city}`

                return (
                    <StyledCard key={job_id} className="mb-3">
                        <Body>
                            <StyledTitle>{job_title}</StyledTitle>
                            <StyledSubTitle className="mb-2">{employer_name}</StyledSubTitle>
                            <StyledText>{jobDescription}</StyledText>
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
                                    <Text>{unDisclosed}</Text>
                                </SingleDetail>
                            </FooterDetails>
                        </Body>
                    </StyledCard>
                )
            })
        }
    </>
}

const forcedCardStyle = css`
    font-weight: 600; 
    cursor: pointer ;
`
const StyledText = styled(Text)`
    font-size: .9rem;
    color: #ffffff;
    ${forcedCardStyle}
`
const StyledTitle = styled(Title)`
    color:#BBE1FA;
    ${forcedCardStyle}
`
const StyledSubTitle = styled(Subtitle)`
    color: #1894e6;
    ${forcedCardStyle}
`
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
    max-width: 32rem; 
    background-color: #0e4366;
    :hover{
        scale:1.02;
    }
        /* padding: 0 0 1.5rem 1rem; */
`