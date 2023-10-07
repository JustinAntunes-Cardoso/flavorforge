import { useState } from 'react';
import { Container, Group, Burger, Image, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { HeaderSearchProps } from '../../utils/types/types';
import classes from './HeaderMenu.module.scss';

//FlavourForge Logo
const logoUrl = import.meta.env.BASE_URL + 'vite.svg';

const HeaderMenu = ({ links }: HeaderSearchProps) => {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Button
            key={link.label}
            to={link.link}
            className={classes.link}
            component={Link}
            data-active={active === link.link || undefined}
            onClick={() => setActive(link.link)}
        >
            {link.label}
        </Button>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image src={logoUrl} className={classes.logo} />
                <nav>
                    <Group gap={5} visibleFrom="xs">
                        {items}
                    </Group>
                </nav>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}

export default HeaderMenu;