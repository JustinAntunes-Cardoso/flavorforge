import { Header, Menu, Group, Center, Burger, Container } from '@mantine/core';
import useHeaderStyles from '../../utils/styles/layout/useHeaderStyles';
import { HeaderSearchProps } from '../../utils/types/types';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import viteLogo from '/vite.svg';

const HeaderMenu = ({ links }: HeaderSearchProps) => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useHeaderStyles();

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <Header height={150} className={classes.header} >
            <Container>
                <div className={classes.inner}>
                    <img src={viteLogo} sizes='30' className="logo" alt="Vite logo" />
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        color="#fff"
                    />
                </div>
            </Container>
        </Header>
    );
}

export default HeaderMenu;