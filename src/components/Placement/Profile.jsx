import './profile.css'

export default function Profile({ profile }) {

    let { image, p_name, branch, company, ctc } = profile;

    return (
        <div className="text-center profile " >
            <img src={image} alt="profile" />
            <h4 className='fw-bold'>{p_name}</h4>
            <h6 className="my-1 fw-bold text-muted">{branch}</h6>
            <h6 className="m-0 mb-3 text-primary">{company}</h6>
            <span>{ctc}</span>
        </div>
    )
}