import { Container, Title, Text, Group } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import { routes } from '../../utils/constants/globals';
import { _404Image } from './404Icon';
import classes from './404.module.scss'

const _404 = () => {

    return (
        <main className={classes.root}>
            <Container>
                <section className={classes.inner}>
                    <_404Image className={classes.image} />
                    <div className={classes.content}>
                        <Title className={classes.title}>You have found a secret place</Title>
                        <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                            Unfortunately, this is only a 404 page.
                            You may have mistyped the address, or
                            the page has been moved to another URL
                        </Text>
                        <Group justify="center">
                            <LinkButton to={routes.home} text='Take me back to home page' />
                        </Group>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default _404;
