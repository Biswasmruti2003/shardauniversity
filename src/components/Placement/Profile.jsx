import './profile.css'

export default function Profile({ profile }) {

    let { image, name, branch, company, ctc } = profile;

    return (
        <div className="text-center profile " >
            <img src={image} alt="profile" />
            <h5>{name}</h5>
            <h6 className="m-0 fw-bold text-muted">{branch}</h6>
            <h6 className="m-0 mb-4 text-primary">{company}</h6>
            <span>{ctc}</span>
        </div>
    )
}