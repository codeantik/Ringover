import './styles.css';
import { teams } from  '../../data'

export const Team = () => {

    return (
        <div className="container team-container">
            <div className="wrapper team-wrapper">
                <header>
                    <p className="headings member-quote">
                        Without bonding and co-ordination, every project is failure, Look at
                        who makes KICKSUP great {".  ;)"}
                    </p>
                </header>

                <div className="team-member-container">
                    {teams.map(({ id, img, role }) => (
                        <div className="member-card" key={id}>
                            <img
                                className="member-image"
                                src={`/assets/${img}`}
                                alt={role}
                            />
                            <div className="member-info">
                                <h3 className="member-name">{img[0].toUpperCase() + img.slice(1, -4)}</h3>
                                <p className="member-bio">{role}</p>
                        
                                <ul className="social-icon-wrapper">
                                    <li className="lists">
                                        <img src='/assets/facebook.png' alt='facebook' className="member-social-icon"/>
                                    </li>
                                    <li className="lists">
                                        <img src='/assets/twitter.png' alt='twitter' className="member-social-icon"/>
                                    </li>
                                    <li className="lists">
                                        <img src='/assets/linkedin.png' alt='linkedin' className="member-social-icon"/>
                                    </li>
                                    <li className="lists">
                                        <img src='/assets/insta.png' alt='instagram' className="member-social-icon"/>
                                    </li>
                                    <li className="lists">
                                        <img src='/assets/medium.png' alt='medium' className="member-social-icon"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className='member-footer'>and You! {';)'}</div>
                </div>
            </div>
        </div>
    )
}
