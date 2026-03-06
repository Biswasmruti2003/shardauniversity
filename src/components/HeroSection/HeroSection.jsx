import './HeroSection.css'
import Button from '@mui/material/Button';

import Contact from '../Contact/Contact'

export default function HeroSection() {

    return (
        <section className="container-fluid py-5" id='hero'>
            <div className="row p-1 p-md-5" >
                <div className="col-lg-7 px-2 px-lg-5 text-center text-lg-start ">
                    <button className='btn btn-light Admin fw-bold border rounded-5' > ADMISSION OPEN FOR 2025-26</button>
                    <div className="hero border-bottom pt-5 ">
                        <h1 className=''>Empowering</h1>
                        <h2 className=''>Future Leaders</h2>
                        <div className='py-5 about '>
                            <p >Join a vibrant community where <span className='fw-bold'> innovation meets tradition.</span></p>
                            <p  >We foster academic excellence and holistic development for students from over 95 countries.</p>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-4 p-2 mb-5 mb-md-0 " >
                            <div className='pb-2'>
                                <i className="bi bi-trophy-fill px-2 py-1 fs-4 border rounded text-primary bg-primary bg-opacity-25"></i>
                                <span className='fw-bold text-muted ms-2'>RANKING</span>
                            </div>
                            <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                <span className='fs-1 fw-bold'>#1</span>
                                <span className='fw-semibold  text-muted ms-2'>Private</span>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 mb-5 mb-md-0  text-md-start text-center" >
                            <div className='pb-2'>
                                <i className="bi bi-globe-americas px-2 py-1 fs-4 border rounded text-danger bg-danger bg-opacity-10"></i>
                                <span className='fw-bold text-muted ms-2'>DIVERSITY</span>
                            </div>
                            <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                <span className='fs-1 fw-bold'>95+</span>
                                <span className='fw-semibold text-muted ms-2'>Nations</span>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 mb-5 mb-md-0  text-md-start text-center ">
                            <div className='pb-2'>
                                <i className="bi bi-mortarboard-fill px-2 py-1 fs-4 border rounded text-warning bg-warning bg-opacity-10"></i>
                                <span className='fw-bold text-muted ms-2'>PLACEMENT</span>
                            </div>
                            <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                <span className='fs-1 fw-bold'>100%</span>
                                <span className='fw-semibold text-muted ms-2'>Support</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 px-2 px-lg-5 ">
                    <div className='contact-form mx-auto rounded-5'>
                        <img src="/shardauniversity/images/scholar.jpeg" className='contact' alt="scholar image" />
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}