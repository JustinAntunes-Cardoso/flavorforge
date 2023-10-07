import HeaderMenu from '../../layout/HeaderMenu'
// import CulinaryInstructions from '../../layout/CulinaryInstructions'
import Footer from '../../layout/Footer'

//Global data
import { headerData } from '../../utils/constants/globals'
import { footerData } from '../../utils/constants/footerLinks'

const Recipe = () => {
    return (
        <>
            <HeaderMenu links={headerData.links} />
            {/* <CulinaryInstructions /> */}
            <Footer data={footerData.data} />
        </>
    )
}

export default Recipe
