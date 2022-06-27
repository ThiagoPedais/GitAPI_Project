import { Link } from 'react-router-dom';

import './styles.scss';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/cepsearch">
                <div className="description">
                    <h1>Desafio Github API</h1>
                    <p>Bootcamp Spring React - DevSuperior</p>
                </div>

                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
