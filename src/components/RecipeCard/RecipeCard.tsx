import { Card, Image, Text, ActionIcon, Badge, Group, Center, Avatar, AspectRatio } from '@mantine/core';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/constants/globals';
import useRecipeCard from '../../utils/styles/component/useRecipeCard';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';

interface RecipeCardProps {
    image: string;
    title: string;
    description?: string;
    rating: string;
    date: string;
}

const RecipeCard = ({ image, title, description, rating, date }: RecipeCardProps) => {
    const { classes, theme } = useRecipeCard();

    return (
        <Card key={title} p="md" radius="md" className={classes.card} component={Link} to={routes.recipe} state={{ image: image, title: title, description: description, rating: rating, date: date }}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={image} />
            </AspectRatio>
            <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                {rating}
            </Badge>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {date}
            </Text>
            <Text className={classes.title} mt={5}>
                {title}
            </Text>

            <Group position="apart" className={classes.footer}>
                <Center>
                    <Avatar src={image} size={24} radius="xl" mr="xs" />
                    <Text fz="sm" inline>
                        {title}
                    </Text>
                </Center>

                <Group spacing={8} mr={0}>
                    <ActionIcon className={classes.action}>
                        <IconHeart size="1rem" color={theme.colors.red[6]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconBookmark size="1rem" color={theme.colors.yellow[7]} />
                    </ActionIcon>
                    <ActionIcon className={classes.action}>
                        <IconShare size="1rem" />
                    </ActionIcon>
                </Group>
            </Group>
        </Card>
    );
}

export default RecipeCard;