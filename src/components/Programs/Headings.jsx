

import './Heading.css'

export default function Heading({ heading }) {

    return (
        <div className="text-center py-5">
            <button type="button" className='HeadSelect' >{heading.btn}</button>
            <h1 className="fw-bold mb-3">{heading.h1}</h1>
            <h5 className="text-muted">{heading.h5}</h5>
        </div>
    )
}