import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { defaultJobs } from '../../constants';
import { location, dollar_sign } from '../../assets';

const { Title, Subtitle, Text, Link, Body } = Card;
let unknownSalaray = "Undisclosed";

export const JobCard = () => {
    return <>
        {
            defaultJobs?.map((data, index) => {
                // const qualification = data?.job_highlights ??
                //     data?.job_highlights?.Qualifications ??
                //     data?.job_highlights?.Qualifications[0] ?? null;
                return <StyledCard key={data?.job_id} style={{ maxWidth: '32rem', }} className="mb-3">
                    <Body>
                        <Title>{data?.job_title}</Title>
                        <Subtitle className="mb-2 text-muted">{data?.employer_name}</Subtitle>
                        <div>
                            <div>
                                <img src={location} alt="location" />
                                <span>World Wide</span>
                            </div>
                            <div>
                                <img src={dollar_sign} alt="dollar_sign" />
                                <span>{unknownSalaray}</span>
                            </div>
                        </div>
                    </Body>
                </StyledCard>
            })
        }
    </>

}

const StyledCard = styled(Card)`
    min-width: 100%;
        /* padding: 0 0 1.5rem 1rem; */
`