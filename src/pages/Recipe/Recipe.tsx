import HeaderMenu from '../../layout/HeaderMenu'
// import CulinaryInstructions from '../../layout/CulinaryInstructions'
import Footer from '../../layout/Footer'

//Global data
import { linkData } from '../../utils/constants/globals'

const Recipe = () => {
    return (
        <>
            <HeaderMenu links={linkData.links} />
            {/* <CulinaryInstructions /> */}
            <Footer links={linkData.links} />
        </>
    )
}

export default Recipe
