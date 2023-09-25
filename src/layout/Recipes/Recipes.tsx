import { Container, SimpleGrid, Title, Text } from "@mantine/core";
import { useLocation } from 'react-router-dom';
import RecipeCard from "../../components/RecipeCard";
import useRecipesStyles from "../../utils/styles/layout/useRecipesStyles";
import LinkButton from "../../components/LinkButton";
import { IconChevronLeft } from '@tabler/icons-react';
import { routes } from "../../utils/constants/globals";

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
    const { classes } = useRecipesStyles();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const serializedItems = searchParams.get('items');
    const items = serializedItems ? serializedItems.split(',') : [];

    return (
        <main className={classes.background}>
            <Container py="xl">
                <LinkButton to={routes.input} text='Back' leftIcon={<IconChevronLeft />} />
                <Title className={classes.text}>
                    Generated Recipes
                </Title>
                <Text size="lg" className={classes.text}>
                    Explore delicious recipes based on your selected ingredients.
                </Text>
            </Container>
            <Container py="xl">
                <SimpleGrid cols={3}>
                    {mockdata.map((info, index) => <RecipeCard key={index} {...info} />)}
                </SimpleGrid>
            </Container>
            {items}
        </main>
    )
}

export default Recipes;
