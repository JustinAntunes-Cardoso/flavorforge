import { Anchor, Text, Group, ActionIcon, Image, rem, Container } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconAppWindow } from '@tabler/icons-react';
import { NavBarProps } from '../../utils/types/types';
import { hrefs } from '../../utils/constants/globals';
import sharkFin from '../../assets/logos/sharkfin.svg';
import classes from './Footer.module.scss';

const Footer = ({ links }: NavBarProps) => {

    const items = links.map((link) => (
        <Anchor
            c="var(--mantine-color-white)"
            key={link.label}
            href={link.link}
            lh={1}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Group className={classes.company} align='center'>
                        <Image src={sharkFin} alt="Blue Fin logo" className={classes.bluefin} />
                        <Text variant="gradient" gradient={{ from: '#557c9c', to: '#163258', deg: 180 }} className={classes.bluefinText} >
                            BLUEFIN
                        </Text>
                    </Group>
                    <Text c='var(--mantine-color-white)' size="xs" className={classes.license}>
                        © 2023 Bluefin. All rights reserved.
                    </Text>
                </div>

                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon classNames={{ root: classes.icon }} size="lg" radius="xl" aria-label='Link to Github' component='a' href={hrefs.github} target='_blank'>
                        <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon className={classes.icon} size="lg" radius="xl" aria-label='Link to LinkedIn' component='a' href={hrefs.linkedIn} target='_blank'>
                        <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon className={classes.icon} size="lg" radius="xl" aria-label='Link to Portfolio' component='a' href={hrefs.portfolio} target='_blank'>
                        <IconAppWindow style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;