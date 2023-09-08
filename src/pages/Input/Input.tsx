import HeaderMenu from '../../layout/HeaderMenu'
import Hero from '../../layout/Hero'
import Footer from '../../layout/Footer'

//Global data
import { headerData } from '../../utils/constants/headerSearch'
import { footerData } from '../../utils/constants/footerLinks'

const Input = () => {
    return (
        <>
            <HeaderMenu links={headerData.links} />
            <Hero />
            <Footer data={footerData.data} />
        </>
    )
}

export default Input
