
import './Footer.css'

export default function Footer() {
    return (
        <div className="container-fluid footer py-5 text-center">
            <div className="row px-5">
                <div className='footer-img my-4 mx-auto'><a className="navbar-brand" href="#"><img src="/shardauniversity/images/unilogo.png" alt="logo" /></a></div>
                <p className='pb-3'>University Grants Commission has empowered Sharda University to award the degrees under Section 22 of UGC Act 1956. It is a full-fledged University and not a deemed University.</p>
                <hr />
                <p> @ 2025 Sharda University. All Rights Reserved.</p>
            </div>
        </div>
    )
}