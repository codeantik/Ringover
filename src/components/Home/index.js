import './styles.css';

export const Home = () => {

    return (
        <div className="container journey-container">
            <div className="wrapper journey-wrapper">
                <header>
                    <h4 className="headings journey-title">
                        The Journey
                    </h4>
                </header>

            <div className="about-company">
                <ul>
                    <li className="lists"><h3 className="heading about-title">The Roots</h3>
                    <p className="text about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. </p></li>

                    <li className="lists"><h3 className="heading about-title">Chapter I</h3>
                    <p className="text about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p></li>

                    <li className="lists"><h3 className="heading about-title">Chapter II</h3>
                    <p className="text about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. </p></li>

                    <li className="lists"><h3 className="heading about-title">KICKSUP</h3>
                    <p className="text about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p></li>
                </ul>
            </div>

            </div>
        </div>
    )
}