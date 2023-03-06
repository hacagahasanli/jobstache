import Card from 'react-bootstrap/Card';
import styled, { css } from 'styled-components';
import { jobDescShorter, setSalaryDetail, animateCards } from '../../utils';
import { fieldsDefaultValues, countries, defaultJobs } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { animated } from "react-spring";
import { JobDetailModal } from '../Modal';
import { StyledLogo } from '../styled-components';
import { setJobDetail, showModal } from '../../store/slices';
import { dollar_sign, location } from "../../assets"


const { Title, Subtitle, Text, Body } = Card;
let jobDescription, salary, jobLocation, descLength = 120;

export const JobCard = ({ jobs }) => {
    const dispatch = useDispatch();
    const { isVisible } = useSelector(state => state.job)

    const handleJobDetail = async (jobDetail) => {
        await dispatch(setJobDetail(jobDetail))
        await dispatch(showModal(true))
    }

    const trail = animateCards(jobs ?? [])

    return <>
        <JobDetailModal show={isVisible} />
        {
            trail?.map((style, index) => {
                const {
                    job_title,
                    job_id,
                    employer_name,
                    job_description,
                    job_min_salary,
                    job_max_salary,
                    job_salary_currency,
                    job_country,
                    job_state,
                    job_city,
                    job_salary_period,
                    employer_logo
                } = jobs[index]

                jobDescription = job_description;
                salary = fieldsDefaultValues?.UN_DISCLOSED;
                jobLocation = fieldsDefaultValues?.WORLD_WIDE;

                if (job_description?.length > descLength) jobDescription = jobDescShorter(job_description, descLength)
                if (job_min_salary) salary = setSalaryDetail(job_max_salary, job_min_salary, job_salary_currency, job_salary_period)
                if (job_country) jobLocation = countries[job_country] ?? job_country

                return (
                    <animated.div key={job_id} style={style}>
                        <StyledCard onClick={() => handleJobDetail(jobs[index])} key={job_id} className="mb-3">
                            <Body>
                                <BodyHeader>
                                    <div>
                                        <StyledTitle>{job_title}</StyledTitle>
                                        <StyledSubTitle className="mb-2">{employer_name}</StyledSubTitle>
                                    </div>
                                    <StyledLogo src={employer_logo} alt="employer_logo" />
                                </BodyHeader>
                                <StyledText>{jobDescription}</StyledText>
                                <FooterDetails>
                                    <SingleDetail>
                                        <img src={location} alt="location_sign" />
                                        <Text>{jobLocation}</Text>
                                    </SingleDetail>
                                    <SingleDetail>
                                        <img src={dollar_sign} alt="dollar_sign" />
                                        <Text>{salary}</Text>
                                    </SingleDetail>
                                </FooterDetails>
                            </Body>
                        </StyledCard>
                    </animated.div>
                )
            })
        }
    </>
}

const BodyHeader = styled.div`
    display:flex;
    justify-content: space-between;
`
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

    img {
        width: 18px;
    }
`
const StyledCard = styled(Card)`
    width: 100%;
    border-radius: 10px;
    border: 1px solid #2b6690;
    cursor: pointer;
    transition: scale 0.2s;
    background-color: #0e4366;
    :hover{
        scale:1.02;
    }
        /* padding: 0 0 1.5rem 1rem; */
`
