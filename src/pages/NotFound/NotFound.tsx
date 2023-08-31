import Header from '../../layout/HeaderMenu';
import Footer from '../../layout/Footer';
import _404 from '../../layout/404/404';
import './NotFound.scss'

//Global data
import { footerData } from '../../utils/constants/footerLinks';
import { headerData } from '../../utils/constants/headerSearch';

//Wildcard page if there's an error with URL
const NotFound = () => {
    return (
        <main>
            <Header links={headerData.links} />
            <_404 />
            <Footer data={footerData.data} />
        </main>
    )
}

export default NotFound
