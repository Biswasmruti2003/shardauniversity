import './Program.css'
import BalanceIcon from '@mui/icons-material/Balance';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ProgramDeatails from './ProgramDetails';
import Heading from './Headings';
import {  useState } from 'react';

import { programs } from './data';

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

    return (
        <div className="container-fluid p-1 p-md-5" id='Program'>
            <Heading heading={heading} />
            <div className="container pb-5 d-flex justify-content-center gap-3 flex-wrap">
                <button className={select === 0 ? "sel" : " select"} onClick={() => handleClick(0)}  > <i className="bi bi-cpu "></i> Engineering</button>
                <button className={select === 1 ? "sel" : " select"} onClick={() => handleClick(1)}> <i className="bi bi-briefcase-fill "></i> Management</button>
                <button className={select === 2 ? "sel" : " select"} onClick={() => handleClick(2)}> <BalanceIcon className='me-2' /> Law</button>
                <button className={select === 3 ? "sel" : " select"} onClick={() => handleClick(3)}>  <LocalHospitalIcon className='me-2' /> Medical</button>
                <button className={select === 4 ? "sel" : " select"} onClick={() => handleClick(4)}> <i className="bi bi-cpu "></i> Sciences</button>
            </div>
            <div className="px-2 px-md-5 d-flex flex-wrap flex-md-nowrap justify-content-between gap-5">
                <ProgramDeatails data={programs[select]} />
            </div>
        </div>

    )
}