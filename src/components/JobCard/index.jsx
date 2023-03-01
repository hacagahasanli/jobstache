import Card from 'react-bootstrap/Card';

const { Title, Subtitle, Text, Link, Body } = Card;

export const JobCard = () => {
    return <Card style={{ maxWidth: '32rem' }}>
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
    </Card>
}