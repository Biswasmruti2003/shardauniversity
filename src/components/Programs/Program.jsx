import './Program.css'
import BalanceIcon from '@mui/icons-material/Balance';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ProgramDeatails from './ProgramDetails';
import Heading from './Headings';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Link from '@mui/material/Link';

export default function Program() {

    let [select, setSelect] = useState(0);

    let handleClick = (n) => {
        setSelect(n);
    }

    let heading = {
        btn: "Academics",
        h1: "Popular Programs",
        h5: "Explore our diverse range of industry-aligned programs designed to launch your career."
    }

    let data = [
        {
            image: "/shardauniversity/images/laptop.jpg",
            desc1: "B.Tech Computer Science",
            desc2: "AI & Machine Learning Specialization",
            subject: ["AI & ML", "Cloud Computing"],
        },
        {
            image: "/shardauniversity/images/images.jpeg",
            desc1: "B.Tech Electronics",
            desc2: "VLSI & Embedded Systems",
            subject: ["IoT", "Robotics", "Automation"],
        },
        {
            image: "/shardauniversity/images/rcpit-workshop-1.jpg",
            desc1: "B.Tech Mechanical",
            desc2: "Mechatronics & Auto",
            subject: ["Automotive", "Thermodynamics", "Design"],
        },
    ];
    return (
        <div className="container-fluid " id='Program'>
            <Heading heading={heading} />
            <div className="container py-2 d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/" ><button className={select === 0 ? "sel" : " select"} onClick={() => handleClick(0)}> <i className="bi bi-cpu "></i> Engineering</button></Link>
                <Link to="/" ><button className={select === 1 ? "sel" : " select"} onClick={() => handleClick(1)}> <i className="bi bi-briefcase-fill "></i> Management</button></Link>
                <Link to="/" ><button className={select === 2 ? "sel" : " select"} onClick={() => handleClick(2)}> <BalanceIcon className='me-2' /> Law</button></Link>
                <Link to="/" ><button className={select === 3 ? "sel" : " select"} onClick={() => handleClick(3)}>  <LocalHospitalIcon className='me-2' /> Medical</button></Link>
                <Link to="/" ><button className={select === 4 ? "sel" : " select"} onClick={() => handleClick(4)}> <i className="bi bi-cpu "></i> Sciences</button></Link>
            </div>
            <div className="container my-5 px-0 d-flex flex-wrap justify-content-center  gap-5">
                <ProgramDeatails data={data[0]} />
                <ProgramDeatails data={data[1]} />
                <ProgramDeatails data={data[2]} />
            </div>
        </div>

    )
}