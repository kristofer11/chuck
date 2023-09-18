import Endorsements from "../components/Endorsements";
import Parade from '../assets/images/paradeCropped2.png'

const EndorsementsPage = () => {
    return (
        <section className="endorsements-page-section">
            <h2 className="section-heading">Key Endorsements</h2>

            <div className="endorsements-text">

                <div style={{ width: '999px', maxWidth: '100%' }}>
                    <div className="endorsements-card">

                        <ul>
                            <li>
                                <h4><span>☆</span> <strong>Kirk Pearson</strong>, <em>former State Senator 39th District</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Nate Nehring</strong>, <em>Snohomish County Council</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Jason Gamble</strong>, <em>Monroe City Council</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Sam Low</strong>, <em>Snohomish County Council</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Carolyn Eslick</strong>, <em>39th District Rep.</em></h4>
                            </li>
                        </ul>
                        <p><em>We're proud to be endorsed by a coalition of community leaders and advocates who share our vision for better education. Their support fuels our commitment to positive change in our schools. Thank you to our endorsers for joining us on this journey.</em></p>
                    </div>
                </div>

            </div>
            <img src={Parade} />
        </section>
    )
}

export default EndorsementsPage