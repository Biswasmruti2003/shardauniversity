import HandshakeIcon from '@mui/icons-material/Handshake';
import './Global.css'

export default function Global() {
    return (
        <>
            <div className="container-fluid main-global py-5 p-3 p-md-5" id='Global'>
                <div className="row p-1 p-md-5">
                    <div className="col-lg-6">
                        <div className="hero py-5">
                            <button className='btn btn-light mb-5 fw-bold border rounded-5' style={{color : "rgb(0,0,54)" ,backgroundColor : "rgb(245, 242, 255)"}} ><i class="bi bi-globe"></i> Global Tie-Ups</button>
                            <h1>Connecting You to</h1>
                            <h2 className='future'>The World's Best.</h2>
                            <div className="global-parent d-flex flex-column py-1 py-md-0 my-5 gap-4">
                                <div className='d-flex'>
                                    <div><i className="bi bi-buildings-fill text-dark rounded-3"></i></div>
                                    <div>
                                        <p className='mb-1 text-muted fw-bold'>USA</p>
                                        <h5 className='mb-1 fw-bolder'>Harvard Business School</h5>
                                        <p className='fw-semibold text-muted'>Online Certification</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div><i className="bi bi-airplane text-dark rounded-3"></i></div>
                                    <div>
                                        <p className='mb-1 text-muted fw-bold'>UNITED KINGDOM</p>
                                        <h5 className='mb-1 fw-bolder'>University of Plymouth</h5>
                                        <p className='fw-semibold text-muted'>Student Exchange</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div><i className="bi bi-people text-dark rounded-3"></i></div>
                                    <div>
                                        <p className='mb-1 text-muted fw-bold'>CANADA</p>
                                        <h5 className='mb-1 fw-bolder'>Western University</h5>
                                        <p className='fw-semibold text-muted'>Research Collaboration</p>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div><i className="bi bi-mortarboard-fill text-dark rounded-3"></i></div>
                                    <div>
                                        <p className='mb-1 text-muted fw-bold'>AUSTRALIA</p>
                                        <h5 className='mb-1 fw-bolder'>Curtin University</h5>
                                        <p className='fw-semibold text-muted'>Dual Degree</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 d-flex flex-column justify-content-center">
                        <div className='text-center' >
                            <h3 className="text-muted mb-5"> We have established strategic partnerships with over across the globe to provide our students with limitless opportunities.</h3>
                            <div className='libary p-md-5 p-3 py-5 text-start'>
                                <h1 className=''>Harvard Business School</h1>
                                <p className="fs-4 my-4">Executive education programs and case study methodologies for business students</p>
                                <div className='d-flex gap-3 flex-wrap'>
                                    <div className='program'>
                                        <h3 className='text-danger'>15+ Programs</h3>
                                        <h6 className=''>ACTIVE</h6>
                                    </div>
                                    <div className='program'>
                                        <h3><HandshakeIcon color='success' fontSize='2rem' /> Verified</h3>
                                        <h6 className=''>PARTNER STATUS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}