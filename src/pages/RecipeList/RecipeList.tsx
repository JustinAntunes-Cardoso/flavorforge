import HeaderMenu from '../../layout/HeaderMenu';
import Recipes from '../../layout/Recipes';
import Footer from '../../layout/Footer';

//Global data
import { headerData } from '../../utils/constants/globals';
import { footerData } from '../../utils/constants/footerLinks';

const RecipeList = () => {
    return (
        <>
            <HeaderMenu links={headerData.links} />
            <Recipes />
            <Footer data={footerData.data} />
        </>
    )
}

export default RecipeList
