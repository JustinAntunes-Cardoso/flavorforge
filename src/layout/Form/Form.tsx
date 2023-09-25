import { useState } from 'react';
import { TagsInput, Container } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import { routes } from '../../utils/constants/globals';

const Form = () => {
    const [items, setItems] = useState<string[]>([]);

    const handleItemInputChange = (values: string[]) => setItems([...values]);

    // Serialize the list of items into a string, separated by commas or any other delimiter
    const serializedItems = items.join(',');


    return (
        <main>
            <Container>
                <form>
                    <TagsInput onChange={handleItemInputChange} label="Enter your ingredients" placeholder="Enter food item" splitChars={[',']} aria-label="Multi-Select Ingredients Input" />
                    <LinkButton to={`${routes.recipeList}?ingredients=${serializedItems}`} text='Create' />
                </form>
            </Container>
        </main>
    )
}

export default Form
