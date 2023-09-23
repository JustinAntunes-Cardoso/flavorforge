import { TagsInput, Container } from '@mantine/core';
import LinkButton from '../../components/LinkButton';
import { routes } from '../../utils/constants/globals';

const Form = () => {
    return (
        <main>
            <Container>
                <form>
                    <TagsInput label="Enter your ingredients" placeholder="Enter food item" splitChars={[',']} aria-label="Multi-Select Ingredients Input" />
                    <LinkButton to={routes.recipeList} text='Create' />
                </form>
            </Container>
        </main>
    )
}

export default Form
