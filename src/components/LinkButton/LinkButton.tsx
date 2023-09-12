import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import useButtonStyles from '../../utils/styles/component/useButtonStyles';
import { ReactNode } from 'react';

interface LinkButtonProps {
    text: string;
    to: string;
    leftIcon?: ReactNode;
}

const LinkButton = ({ text, to, leftIcon }: LinkButtonProps) => {
    const { classes } = useButtonStyles();

    return (
        <Button radius="xl" size="md" className={classes.control} leftIcon={leftIcon ? leftIcon : ''} component={Link} to={to}>{text}</Button>
    );
};

export default LinkButton;