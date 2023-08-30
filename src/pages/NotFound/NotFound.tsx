import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './NotFound.scss'

//Wildcard page if there's an error with URL
const NotFound = () => {
    return (
        <main>
            <Header />
            <div>
                <h1>404</h1>
                <p>This is not the web page you are looking for.</p>
            </div>
            <Footer />
        </main>
    )
}

export default NotFound
