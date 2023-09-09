import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import useButtonStyles from '../../utils/styles/component/useButtonStyles';

interface LinkButtonProps {
    text: string;
    to: string;
}

const LinkButton = ({ text, to }: LinkButtonProps) => {
    const { classes } = useButtonStyles();

    return (
        <Link to={to}>
            <Button radius="xl" size="md" className={classes.control}>{text}</Button>
        </Link>
    );
};

export default LinkButton;