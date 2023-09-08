import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import veg from '../../assets/icons/vegetables_hero.svg';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.fn.variant({
            variant: 'filled',
            color: theme.primaryColor,
        }).background,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: `calc(${theme.spacing.xl} * 8)`,
        paddingBottom: `calc(${theme.spacing.xl} * 8)`,
    },

    content: {
        maxWidth: rem(480),
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.3,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
        },
    },

    subtitle: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.white,
        fontSize: rem(22),
    },

    emoji: {
        fontSize: rem(36),
    },

    text: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.white,
        fontSize: rem(18),
    },

    bullet: {
        backgroundColor: theme.colors.secondary[3],
        borderRadius: 10,
        marginTop: rem(1.5),

    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
        backgroundColor: theme.colors.secondary[3],
        '&:hover': {
            backgroundColor: theme.colors.secondary[5],
            borderColor: theme.colors.secondary[4],
        },
    },

    link: {
        color: theme.white,
        backgroundColor: theme.colors.brand[6],
        borderColor: theme.colors.accents[7],
        '&:hover': {
            backgroundColor: theme.colors.accents[3],
            borderColor: theme.colors.accents[7],
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.colors.secondary[3],
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },
}));

const Hero = () => {
    const { classes } = useStyles();
    return (
        <main className={classes.root}>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            <span className={classes.highlight}>Welcome</span> to FlavorForge
                        </Title>
                        <Text color="dimmed" mt="md" className={classes.subtitle}>
                            Your Recipe Magic Wand <span className={classes.emoji}>🪄</span>
                        </Text>

                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={rem(15)} stroke={1.5} className={classes.bullet} />
                                </ThemeIcon>
                            }
                            className={classes.text}
                        >
                            <List.Item>
                                <b>Fast & Efficient</b> – Get recipe ideas in seconds, no more wasting time searching for recipes.
                            </List.Item>
                            <List.Item>
                                <b>Easy to Use</b> – Our user-friendly interface makes meal planning a breeze.
                            </List.Item>
                            <List.Item>
                                <b>Creative Cooking</b> – Discover new recipes and experiment with ingredients you already have.
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Link to='/input'>
                                <Button radius="xl" size="md" className={classes.control}>
                                    Get Started
                                </Button>
                            </Link>
                            <a href="https://github.com/JustinAntunes-Cardoso/flavorforge" target="_blank" rel="noopener noreferrer">
                                <Button variant="default" radius="xl" size="md" className={`${classes.control} ${classes.link}`}>
                                    Source code
                                </Button>
                            </a>
                        </Group>
                    </div>
                    <Image src={veg} className={classes.image} />
                </div>
            </Container>
        </main>
    );
}

export default Hero
