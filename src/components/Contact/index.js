import './styles.css';
import { contacts } from '../../data';


export const Contact = () => {

    return (
        <div className='contact-container'>
            <div className='contact-card'>
                <p className='contact-header'>Reach us at</p>
                <div className='contact-details'>
                    {contacts.map(({ id, email, work }) => (
                        <div className='contact-info' key={id}>
                            <p>{email}</p>
                            <p>{work}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="stay-in-touch">
                <p>Stay in touch</p>
                <div className="touch-details">
                    <li className="lists">
                        <img src='/assets/twitter.png' alt='twitter' className='touch-details-icon' />
                    </li>
                    <li className="lists">
                        <img src='/assets/insta.png' alt='instagram' className='touch-details-icon' />
                    </li>
                    <li className="lists">
                        <img src='/assets/facebook.png' alt='facebook' className='touch-details-icon' />
                    </li>
                </div>
            </div>
        </div>
    )
}