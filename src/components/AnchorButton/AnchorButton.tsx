import { Button } from '@mantine/core';
import classes from './AnchorButton.module.scss'

interface AnchorButtonProps {
    text: string;
    href: string;
}

const AnchorButton = ({ text, href }: AnchorButtonProps) => {

    return (
        <Button classNames={{ root: classes.root }} radius="xl" size="md" component='a' href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </Button>
    )
}

export default AnchorButton
