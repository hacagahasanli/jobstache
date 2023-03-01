import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const { Title, Subtitle, Text, Link, Body } = Card;

export const JobCard = () => {
    return <StyledCard style={{ maxWidth: '32rem', }} className="mb-3">
        <Body>
            <Title>Card Title</Title>
            <Subtitle className="mb-2 text-muted">Card Subtitle</Subtitle>
            <Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Text>
            <Link href="#">Card Link</Link>
            <Link href="#">Another Link</Link>
        </Body>
    </StyledCard>
}

const StyledCard = styled(Card)`
    min-width: 100%;
        /* padding: 0 0 1.5rem 1rem; */
`