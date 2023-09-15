import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
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
                <Route path='/contact' element={<Contact />} />         
            </Routes>

        <Footer />
    </>
  )
}

export default App
