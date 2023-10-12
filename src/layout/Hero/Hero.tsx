import { Image, Container, Title, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import AnchorButton from '../../components/AnchorButton';
import { routes, hrefs } from '../../utils/constants/globals';
import { IconCheck } from '@tabler/icons-react';
import classes from './Hero.module.scss';
import veg from '../../assets/icons/vegetables_hero.svg';

const Hero = () => {

    return (
        <main className={classes.root}>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            <span className={classes.highlight}>Welcome</span> to FlavorForge
                        </Title>
                        <Text c="white" mt="md" className={classes.subtitle}>
                            Your Recipe Magic Wand <span className={classes.emoji}>🪄</span>
                        </Text>
                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl" className={classes.bullet}>
                                    <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
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
                        <div className={classes.buttons}>
                            <Group mt={30}>
                                <LinkButton to={routes.input} text='Get Started' />
                                <AnchorButton href={hrefs.github} text='Source code' />
                            </Group>
                        </div>
                    </div>
                    <Image src={veg} className={classes.image} alt='Vegetables Icon' />
                </div>
            </Container>
        </main>
    );
};

export default Hero;