import HeaderMenu from '../../layout/HeaderMenu';
import Recipes from '../../layout/Recipes';
import Footer from '../../layout/Footer';

//Global data
import { linkData } from '../../utils/constants/globals';

const RecipeList = () => {
    return (
        <>
            <HeaderMenu links={linkData.links} />
            <Recipes />
            <Footer links={linkData.links} />
        </>
    )
}

export default RecipeList
