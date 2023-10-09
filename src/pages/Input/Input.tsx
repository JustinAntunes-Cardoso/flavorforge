import HeaderMenu from '../../layout/HeaderMenu'
import Form from '../../layout/Form'
import Footer from '../../layout/Footer'

//Global data
import { linkData } from '../../utils/constants/globals'

const Input = () => {
    return (
        <>
            <HeaderMenu links={linkData.links} />
            <Form />
            <Footer links={linkData.links} />
        </>
    )
}

export default Input
