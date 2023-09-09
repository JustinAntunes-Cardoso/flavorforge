import { Container, Title, Text, Group } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import { use404Styles } from '../../utils/styles/layout/use404Styles';
import { routes } from '../../utils/constants/globals';
import { Illustration } from './Illustration';

const _404 = () => {
    const { classes } = use404Styles();

    return (
        <main className={classes.root}>
            <Container>
                <section className={classes.inner}>
                    <Illustration className={classes.image} />
                    <div className={classes.content}>
                        <Title className={classes.title}>You have found a secret place</Title>
                        <Text size="lg" align="center" className={classes.description}>
                            Unfortunately, this is only a 404 page.
                            You may have mistyped the address, or
                            the page has been moved to another URL
                        </Text>
                        <Group position="center">
                            <LinkButton to={routes.home} text='Take me back to home page' />
                        </Group>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default _404;
