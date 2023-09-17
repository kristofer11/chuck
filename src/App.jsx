import './App.scss';
import './styles/whitfieldFamily.scss';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EndorsementsPage from './pages/EndorsementsPage';
import Contact from './pages/Contact';
import WhitfieldFamily from './pages/WhitfieldFamily';
import FooterLinks from './components/FooterLinks';
import { Route, Routes, useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return null;
}

function App() {

    return (
        <>
            <Header />
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/endorsements' element={<EndorsementsPage />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/whitfield-family' element={<WhitfieldFamily />} />

                </Routes>
            <ScrollToTop />
            <FooterLinks />
            <Footer />
        </>
    )
}

export default App
