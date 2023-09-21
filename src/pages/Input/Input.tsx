import HeaderMenu from '../../layout/HeaderMenu'
import Form from '../../layout/Form'
import Footer from '../../layout/Footer'

//Global data
import { headerData } from '../../utils/constants/headerSearch'
import { footerData } from '../../utils/constants/footerLinks'

const Input = () => {
    return (
        <>
            <HeaderMenu links={headerData.links} />
            <Form />
            <Footer data={footerData.data} />
        </>
    )
}

export default Input
