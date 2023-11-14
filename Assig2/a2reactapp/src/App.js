import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (

        <div className="App container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Assignment 2</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className="nav-link active" to="/Region">
                                Home
                            </Link>


                            <Link className="nav-link" to="/Country">
                                Countries
                            </Link>

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />

        </div>

    );
}

export default App;
