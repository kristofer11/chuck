import Kirk from '../assets/kirkSquare.png';
import Ocean from '../assets/oceanSquare.png';
import Ruby from '../assets/rubySquare.png';
import LaceyErin from '../assets/laceyErinSquare.png'
import Christie from '../assets/christy.jpg';
import { Card } from 'react-bootstrap';

const HomeImages = () => {
    return (
        <section className="home-images-section d-flex">
            <div className="home-images-container">
                <img src={Ruby} alt='' />
                <img src={Kirk} alt='' />
                <img src={Ocean} alt='' />
                <img src={LaceyErin} alt='' />
            </div>
        </section>
    )
}

export default HomeImages