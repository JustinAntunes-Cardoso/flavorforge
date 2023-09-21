import { TagsInput } from '@mantine/core';

const Form = () => {
    return (
        <main>
            <form>
                <TagsInput label="Enter your ingredients" placeholder="Enter food item" splitChars={[',']} aria-label="Multi-Select Ingredients Input" />
            </form>
        </main>
    )
}

export default Form
