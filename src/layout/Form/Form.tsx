import { useState } from 'react';
import { TagsInput, Container, Title } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import { routes } from '../../utils/constants/globals';
import classes from './Form.module.scss';

const Form = () => {
    const [items, setItems] = useState<string[]>([]);

    const handleItemInputChange = (values: string[]) => setItems([...values]);

    // Serialize the list of items into a string, separated by commas or any other delimiter
    const serializedItems = items.join(',');


    return (
        <main className={classes.root}>
            <Container size="md">
                <div className={classes.titleContainer}>
                    <Title c='white' className={classes.title}>Recipe Creator:</Title>
                    <Title c="white" order={2} className={classes.subtitle}>Enter your ingredients and let us do the magic <span className={classes.emoji}>🧙‍♂️</span></Title>
                </div>
                <form className={classes.form}>
                    <TagsInput onChange={handleItemInputChange} label="Enter your ingredients" placeholder="Enter food item" splitChars={[',']} aria-label="Multi-Select Ingredients Input" />
                    <LinkButton to={`${routes.recipeList}?ingredients=${serializedItems}`} text='Create' />
                </form>
            </Container>
        </main>
    )
}

export default Form
