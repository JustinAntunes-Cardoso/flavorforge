import Header from '../../layout/HeaderMenu';
import Footer from '../../layout/Footer';
import _404 from '../../layout/404/404';

//Global data
import { headerData } from '../../utils/constants/globals';
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
