import { AspectRatio, Container, Image, Title, Text, Group } from "@mantine/core"

interface CulinaryInstructionsProps {
    image: string;
    title: string;
    description: string;
    rating: string;
    date: string;
}

const CulinaryInstructions = ({ image, title, description, rating, date }: CulinaryInstructionsProps) => {
    return (
        <main>
            <AspectRatio ratio={21 / 9}>
                <Image src={image} />
            </AspectRatio>
            <Container>
                <Title>{title}</Title>
                <Group>
                    <Text>{rating}</Text>
                    <Text>{date}</Text>
                </Group>
                <Text>{description}</Text>
            </Container>
        </main>
    )
}

export default CulinaryInstructions
