
import './Excellence.css'

import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export default function Excellence() {

    return (
        <div className="container-fluid px-1 px-md-5 py-5 excellence">
            <div className="text-center px-1 px-md-5">
                <button type="button" className="btn btn-sm btn-outline-primary my-4 rounded-5 "><i className="bi bi-trophy-fill me-2 text-warning"></i>HALL OF FAME</button>
                <div className="fw-bolder fs-1 my-4">Excellence <span id='design'>Recognized</span></div>
                <p className='fs-4'>Our commitment to academic quality and student success has been <br /> consistently acknowledged by prestigious national and international bodies</p>
            </div>
            <div className="p-2 p-md-5 my-5 d-flex justify-content-center justify-content-md-between gap-3 flex-wrap ">
                <div className="text-center py-5 px-4 grade slid" >
                    <i className="bi bi-trophy bg-warning"></i>
                    <h3 className="my-4 fw-bold ">NIRF Ranking</h3>
                    <span className='bg-warning fw-bold  px-2 py-1 rounded-3'>Top 150</span>
                    <hr />
                    <p>Ranked among top universities <br />in India by Ministry of Education</p>
                </div>
                <div className="text-center py-5 px-4 grade slid" >
                    <i className="bi bi-trophy-fill bg-primary "></i>
                    <h3 className="my-4 fw-bold ">QS I-Gauge</h3>
                    <span className='bg-primary fw-bold  px-2 py-1 rounded-3'>Gold Rating</span>
                    <hr />
                    <p>Awarded Gold University rating for <br /> overall excellence</p>
                </div>
                <div className="text-center py-5 px-4 grade slid" >
                    <i className="bi bi-shield-check bg-success "></i>
                    <h3 className="my-4 fw-bold ">NAAC A+</h3>
                    <span className='bg-success fw-bold  px-2 py-1 rounded-3'>Accredited</span>
                    <hr />
                    <p>Highest grade accreditation for <br /> quality education and infrastructure</p>
                </div>
                <div className="text-center py-5 px-4 grade slid" >
                    <i className="bi bi-trophy-fill bg-info "></i>
                    <h3 className="my-4 fw-bold ">ASSOCHAM</h3>
                    <span className='bg-info fw-bold  px-2 py-1 rounded-3'>Best University</span>
                    <hr />
                    <p>Recognized for excellence in <br /> industry interface and placements</p>
                </div>
            </div>
            <div className='container border-top  py-5'>
                <div className="container py-4 d-flex justify-content-center justify-content-md-evenly gap-5 flex-wrap">
                    <div className='text-center'>
                        <p className='m-0 fw-bold text-secondary'><MilitaryTechIcon />YEAR LEGACY</p>
                        <h1>27+</h1>
                    </div>
                    <div className='text-center'>
                        <p className='m-0 fw-bold text-secondary'> <LanguageIcon /> PARTNER UNIVERSITIES</p>
                        <h1>250+</h1>
                    </div>
                    <div className='text-center'>
                        <p className='m-0  fw-bold text-secondary'><EmojiEventsIcon /> STARTUPS INCUBATED </p>
                        <h1>100+</h1>
                    </div>
                    <div className='text-center'>
                        <p className='m-0  fw-bold text-secondary'><MilitaryTechIcon />PATENTS PUBLISHED </p>
                        <h1>500+</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}