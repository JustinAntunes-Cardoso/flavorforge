import { Container, Title, Text, Button, Group } from '@mantine/core';
import { use404Styles } from '../../utils/hooks/useStyles';
import { Illustration } from './Illustration';
import './404.scss'


const _404 = () => {
    const { classes } = use404Styles();

    return (
        <section className={classes.root}>
            <Container>
                <div className={classes.inner}>
                    <Illustration className={classes.image} />
                    <div className={classes.content}>
                        <Title className={classes.title}>You have found a secret place</Title>
                        <Text size="lg" align="center" className={classes.description}>
                            Unfortunately, this is only a 404 page.
                            You may have mistyped the address, or
                            the page has been moved to another URL
                        </Text>
                        <Group position="center">
                            <Button size="md" variant="white">
                                Take me back to home page
                            </Button>
                        </Group>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default _404;
