import Header from '../../layout/HeaderMenu';
import Footer from '../../layout/Footer';
import _404 from '../../layout/404/404';

//Global data
import { linkData } from '../../utils/constants/globals';

//Wildcard page if there's an error with URL
const NotFound = () => {
    return (
        <>
            <Header links={linkData.links} />
            <_404 />
            <Footer links={linkData.links} />
        </>
    )
}

export default NotFound
