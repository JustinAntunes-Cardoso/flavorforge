import HeaderMenu from '../../layout/HeaderMenu'
import Hero from '../../layout/Hero'
import Footer from '../../layout/Footer'

//Global data
import { linkData } from '../../utils/constants/globals';


const Home = () => {
    return (
        <>
            <HeaderMenu links={linkData.links} />
            <Hero />
            <Footer links={linkData.links} />
        </>
    )
}

export default Home
