import HeaderMenu from '../../layout/HeaderMenu'
import Hero from '../../layout/Hero';
import Footer from '../../layout/Footer'
import './Home.scss'

//Global data
import { headerData } from '../../utils/constants/headerSearch';
import { footerData } from '../../utils/constants/footerLinks';

const Home = () => {
    return (
        <>
            {/* Used for test */}
            Home
            <HeaderMenu links={headerData.links} />
            <Hero />
            <Footer data={footerData.data} />
        </>
    )
}

export default Home
