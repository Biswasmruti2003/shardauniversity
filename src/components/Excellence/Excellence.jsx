
import './Excellence.css'

import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Rank from './Rank';
import Rankcard from './Rankcard';

export default function Excellence() {
    let rankData = [
        {
            icon: <i className="bi bi-trophy bg-warning"></i>,
            title: "NIRF Ranking",
            rank: "Top 150",
            desc: "Ranked among top universities in India by Ministry of Education"
        },
        {
            icon: <i className="bi bi-shield-check bg-success "></i>,
            title: "NAAC A+",
            rank: "Accredited",
            desc: "Highest grade accreditation for quality education and infrastructure"
        },
        {
            icon: <i className="bi bi-trophy bg-warning"></i>,
            title: "QS I-Gauge",
            rank: "Gold Rating",
            desc: "Awarded Gold University rating for overall excellence"
        },
        {
            icon: <i className="bi bi-trophy-fill bg-info "></i>,
            title: "ASSOCHAM",
            rank: "Best University",
            desc: "Recognized for excellence in industry interface and placements"
        },
    ]
    let data = [
        {
            title: "YEAR LEGACY",
            rank: "27+",
            icon: <MilitaryTechIcon />
        },
        {
            title: "PARTNER UNIVERSITIES",
            rank: "250+",
            icon: <LanguageIcon />
        },
        {
            title: " STARTUPS INCUBATED",
            rank: "100+",
            icon: <EmojiEventsIcon />
        },
        {
            title: "PATENTS PUBLISHED ",
            rank: "500+",
            icon: <MilitaryTechIcon />
        },
    ]

    return (
        <div className="container-fluid px-1 px-md-5 py-5 excellence">
            <div className="text-center px-1 px-md-5">
                <button type="button" className="btn btn-sm btn-outline-primary my-4 rounded-5 "><i className="bi bi-trophy-fill me-2 text-warning"></i>HALL OF FAME</button>
                <div className="fw-bolder fs-1 my-4">Excellence<span id='design'>Recognized</span></div>
                <p className='fs-4'>Our commitment to academic quality and student success has been <br /> consistently acknowledged by prestigious national and international bodies</p>
            </div>
            <div className=" p-md-5 my-5 d-flex flex-wrap justify-content-center justify-content-lg-between gap-5">
                <Rankcard rankData={rankData} />
            </div>
            <div className='container-fluid border-top  py-5'>
                <div className="row py-4 gap-5 gap-lg-0">
                    <Rank data={data} />
                </div>
            </div>
        </div>
    )
}