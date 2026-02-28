import './Study.css'

export default function Study() {
    return (
        <div className="container-fluid fw-bolder p-md-5 my-md-5" id='Study'>
            <div className="row p-0 p-md-5">
                <div className="col-md-6 ">
                    <div className="mx-auto p-2">
                        <h4 className="text-primary">Discover Excellence</h4>
                        <h1>Why Study at <br />
                            <span className='text-warning'>Sharda University?</span>
                        </h1>
                        <ul className='mt-md-3 mt-5'>
                            <li><h5>NAAC A+ Accredited University</h5></li>
                            <li><h5>100 acres of lush green eco-friendly campus</h5></li>
                            <li><h5>Top Ranked Among India's Top 50 Universities</h5></li>
                            <li><h5>40,000+ Alumni Network across the globe</h5></li>
                            <li><h5>Distinguished faculty with global experience</h5></li>
                            <li><h5>On-campus 1200+ bed super-specialty hospital</h5></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="Ad-parent d-flex flex-column p-3 p-lg-5 my-5">
                        <h2 className='text-light  fw-bold'>Sharda Advantages</h2>
                        <div className='d-flex'>
                            <div><i className="bi bi-globe-americas text-success bg-success bg-opacity-10 rounded-3"></i></div>
                            <div>
                                <h4 className='m-0'>Global Exposure</h4>
                                <p className='m-0 fw-light'>Tie-ups with 250+ global universities for exchange programs.</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <i className="bi bi-buildings-fill text-primary bg-primary bg-opacity-25 rounded-3"></i>
                            </div>
                            <div>
                                <h4 className='m-0'>Industry Ready</h4>
                                <p className='m-0 fw-light'>Curriculum designed by industry experts to ensure employability.</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <i className="bi bi-people text-warning bg-warning rounded-3 bg-opacity-25"></i>
                            </div>
                            <div>
                                <h4 className='m-0'>Sharda Community</h4>
                                <p className='m-0 fw-light'>Students from 95+ countries creating a rich cultural mosaic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-5 ">
                <div className="count p-3 p-md-5  d-flex justify-content-around flex-wrap gap-5">
                    <div>
                        <h1>03</h1>
                        <p>Nobel Laureates</p>
                    </div>
                    <div>
                        <h1>1023+</h1>
                        <p>Patents</p>
                    </div>
                    <div>
                        <h1>200+</h1>
                        <p>Startups</p>
                    </div>
                    <div>
                        <h1>7+</h1>
                        <p>Students</p>
                    </div>
                    <div>
                        <h1>1100+</h1>
                        <p>Faculty</p>
                    </div>
                </div>
            </div>
        </div>
    )
}