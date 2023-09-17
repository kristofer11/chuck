import Kirk from '../assets/images/kirkSquare.png';
import Ocean from '../assets/images/oceanSquare.png';
import Ruby from '../assets/images/rubySquare.png';
import LaceyErin from '../assets/images/laceyErinSquare.png'
import Christie from '../assets/images/christy square.png';

const HomeImages = () => {
    return (
        <section className="home-images-section d-flex">
            <div className="home-images-container">
                <img src={Ruby} alt='Child walking in road holding Chuck Whitfield for Monroe School Board member sign' />
                <img src={Kirk} alt='Chuck Whitfield posing for photo with former State Senator Kirk Pearson.' />
                <img src={Christie} alt='Woman holding hand of child and Chuck Whitfield for Monroe School board sign' />
                <img src={LaceyErin} alt='Two young ladies posing for a photo with their Chuck Whitfield School Board signs.' />
            </div>
        </section>
    )
}

export default HomeImages