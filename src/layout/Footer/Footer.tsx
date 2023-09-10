import { Text, Container, ActionIcon, Group, Image } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconAppWindow } from '@tabler/icons-react';
import useFooterStyles from '../../utils/styles/layout/useFooterStyles';
import { FooterLinksProps } from '../../utils/types/types';
import sharkFin from '../../assets/logos/sharkfin.svg';
import './Footer.scss';

const Footer = ({ data }: FooterLinksProps) => {
    const { classes } = useFooterStyles();

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
            <Container className={classes.inner} py={4}>
                <div className={classes.logo}>
                    <Group className={classes.company} align='center'>
                        <Image src={sharkFin} alt="Blue Fin logo" className={classes.bluefin} />
                        <Text size={70} variant="gradient" gradient={{ from: '#557c9c', to: '#163258', deg: 180 }} className={classes.bluefinText} >
                            BLUEFIN
                        </Text>
                    </Group>
                    <Text size="sm" color="dimmed" className={classes.description}>
                        Ingredients Unlocked, Recipes Discovered: FlavorForge - Where Culinary Creativity Begins!
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm" className={classes.license}>
                    © 2023 Bluefin. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandLinkedin size="2rem" stroke={1.5} className={classes.license} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconAppWindow size="2rem" stroke={1.5} className={classes.license} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandGithub size="2rem" stroke={1.5} className={classes.license} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;