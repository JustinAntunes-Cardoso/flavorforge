import { createStyles, Container, SimpleGrid, Title, Text } from "@mantine/core";
import RecipeCard from "../../components/RecipeCard";


const mockdata = [
    {
        title: 'Top 10 places to visit in Norway this summer',
        link: "https://mantine.dev/",
        rating: "outstanding",
        image:
            'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 18, 2022',
    },
    {
        title: 'Best forests to visit in North America',
        link: "https://mantine.dev/",
        rating: "outstanding",
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 27, 2022',
    },
    {
        title: 'Hawaii beaches review: better than you think',
        link: "https://mantine.dev/",
        rating: "outstanding",
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 9, 2022',
    },
    {
        title: 'Mountains at night: 12 best locations to enjoy the view',
        link: "https://mantine.dev/",
        rating: "outstanding",
        image:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 12, 2022',
    },
];

const Recipes = () => {
    const useStyles = createStyles((theme) => ({
        background: {
            backgroundColor: theme.fn.variant({
                variant: 'filled',
                color: theme.primaryColor,
            }).background,
        },
    }));

    const { classes } = useStyles();

    return (
        <main className={classes.background}>
            <Container py="xl">
                <Title>
                    Generated Recipes
                </Title>
                <Text size="lg">
                    Explore delicious recipes based on your selected ingredients.
                </Text>
            </Container>
            <Container py="xl">

                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    {mockdata.map((info, index) => <RecipeCard key={index} {...info} />)}
                </SimpleGrid>
            </Container>
        </main>
    )
}

export default Recipes;
