import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import { useStyles } from '../../utils/hooks/useStyles';
import { FooterLinksProps } from '../../utils/types/types';
import viteLogo from '/vite.svg';
import './Footer.scss'

const Footer = ({ data }: FooterLinksProps) => {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <img src={viteLogo} sizes='30' className="logo" alt="Vite logo" />
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Ingredients Unlocked, Recipes Discovered: FlavorForge - Where Culinary Creativity Begins!
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2023 FlavourForge. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandLinkedin size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandGithub size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;