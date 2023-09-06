import Header from '../../layout/HeaderMenu';
import Footer from '../../layout/Footer';
import _404 from '../../layout/404/404';
import './NotFound.scss'

//Global data
import { headerData } from '../../utils/constants/headerSearch';
import { footerData } from '../../utils/constants/footerLinks';

//Wildcard page if there's an error with URL
const NotFound = () => {
    return (
        <>
            <Header links={headerData.links} />
            <_404 />
            <Footer data={footerData.data} />
        </>
    )
}

export default NotFound
