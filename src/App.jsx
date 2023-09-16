import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EndorsementsPage from './pages/EndorsementsPage';
import Contact from './pages/Contact';
import FooterLinks from './components/FooterLinks';
import { Route, Routes } from 'react-router-dom';


// import Hero from './components/Hero';
// import HomeImages from './components/HomeImages';

// import HomePriorities from './components/HomePriorities';
// import AboutChuck from './components/AboutChuck';
// import Endorsements from './components/Endorsements'

function App() {

  return (
    <>
        <Header />
            <Routes>
                <Route path='/' element={<Home />} />   
                <Route path='/about' element={<About />} />
                <Route path='/endorsements' element={<EndorsementsPage />} />
                <Route path='/contact' element={<Contact />} />         
            </Routes>
        <FooterLinks />
        <Footer />
    </>
  )
}

export default App
