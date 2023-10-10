import { Container, Title, Text, Group } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import { routes } from '../../utils/constants/globals';
import { _404Image } from './404Icon';
import classes from './404.module.scss'

const _404 = () => {

    return (
        <main className={classes.root}>
            <Container>
                <div className={classes.inner}>
                    <_404Image className={classes.image} />
                    <div className={classes.content}>
                        <Title c="white" className={classes.title}>You have found a secret place</Title>
                        <Text c="white" size="lg" ta="center" className={classes.description}>
                            Page you are trying to open does not exist. You may have mistyped the address, or the
                            page has been moved to another URL. If you think this is an error contact support.
                        </Text>
                        <Group justify="center">
                            <LinkButton to={routes.home} text='Take me back to home page' />
                        </Group>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default _404;
