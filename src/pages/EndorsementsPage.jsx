import Endorsements from "../components/Endorsements";
import Parade from '../assets/images/paradeCropped.png'

const EndorsementsPage = () => {
    return (
        <section className="endorsements-page-section">
            <h2 className="section-heading">Key Endorsements</h2>

            <div className="endorsements-text">

                <div style={{ width: '999px', maxWidth: '100%' }}>
                    <div className="endorsements-card">
                        <p>We're proud to be endorsed by a coalition of community leaders, educators, and advocates who share our vision for better education. Their support fuels our commitment to positive change in our schools. Thank you to our endorsers for joining us on this journey.</p>
                        <ul>
                            <li>
                                <h4><span>☆</span> <strong>Kirk Pearson</strong>, <em>former State Senator 39th District</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Nate Nehring</strong>, <em>Snohomish County Council</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Sam Low</strong>, <em>Snohomish County Council</em></h4>
                            </li>
                            <li>
                                <h4><span>☆</span> <strong>Carolyn Eslick</strong>, <em>39th District Rep.</em></h4>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <img src={Parade} />
        </section>
    )
}

export default EndorsementsPage