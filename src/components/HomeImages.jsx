import Kirk from '../assets/IMG_0022.jpg';
import Ocean from '../assets/IMG_7382.jpg';
import Ruby from '../assets/ruby.jpg';
import LaceyErin from '../assets/IMG_7873.png'
import Christie from '../assets/christy.jpg';
import { Card } from 'react-bootstrap';

const HomeImages = () => {
    return (
        <section className="home-images-section d-flex">
            <div className="home-images-container">
                <div className='images-card d-flex'>
                    <img src={Ruby} alt='' />
                    <p>Take responsibility for school district governance.</p>
                </div>
                <div className='images-card d-flex'>
                    <p>Take responsibility for school district governance.</p>
                    <img src={Kirk} alt='' />

                </div>
                <div className='images-card d-flex'>
                    <img src={Ocean} alt='' />
                    <p>Take responsibility for school district governance.</p>
                </div>
                <div className='images-card d-flex'>
                    <img src={LaceyErin} alt='' />
                    <p>Take responsibility for school district governance.</p>
                </div>

            </div>

        </section>
    )
}

export default HomeImages