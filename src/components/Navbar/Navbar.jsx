
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
            <div className="container-fluid px-md-5 py-0 ">
                <a className="navbar-brand" href="#"><img src="/shardauniversity/images/unilogo.png" alt="firstlogo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-md-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#hero">About Shardhaa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Program">Programmes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Global"> Global Tie-Ups</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Study"> Highlights</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#admission"> Admissions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}