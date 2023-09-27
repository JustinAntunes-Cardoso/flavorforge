import { Button } from '@mantine/core';
import classes from './AnchorButton.module.scss'

interface AnchorButtonProps {
    text: string;
    href: string;
}

const AnchorButton = ({ text, href }: AnchorButtonProps) => {

    return (
        <Button variant="default" radius="xl" size="md" className={classes.anchor} component='a' href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </Button>
    )
}

export default AnchorButton
