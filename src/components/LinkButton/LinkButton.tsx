import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './LinkButton.module.scss';
import { ReactNode } from 'react';

interface LinkButtonProps {
    text: string;
    to: string;
    leftIcon?: ReactNode;
}

const LinkButton = ({ text, to, leftIcon }: LinkButtonProps) => {

    return (
        <Button radius="xl" size="md" className={classes.control} leftSection={leftIcon ? leftIcon : ''} component={Link} to={to}>
            {text}
        </Button>
    );
};

export default LinkButton;