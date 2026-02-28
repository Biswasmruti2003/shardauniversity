
import "./Contact.css"
export default function Contact() {
    return (
        <form action="" className="p-3 p-md-5 ">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold text-muted ">FULLNAME</label>
                    <input type="text" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Biswasmruti" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold text-muted">EMAIL ADDRESS</label>
                    <input type="email" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="BIswa@gmail.com" />
                </div>
            </div>
            <div className=" mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold text-muted">PHONE NUMBER</label>
                <input type="tel" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+91 96575 44844" />
            </div>
            <div className="row mb-4">
                <div className="col-md-6 mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold text-muted">SELECT PROGRAM</label>
                    <select className="form-select" aria-label="Default select example">
                        <option >Select Program</option>
                        <option value="1">Engineering</option>
                        <option value="2">Mangement</option>
                        <option value="3">Law</option>
                        <option value="3">Medical</option>
                        <option value="3">Science</option>
                    </select>
                </div>
                <div className="col-md-6 mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-semibold text-muted">SELECT STATE</label>
                    <select className="form-select" aria-label="Default select example">
                        <option >Select State</option>
                        <option value="1">Odisha</option>
                        <option value="2">UP</option>
                        <option value="3">Karnatak</option>
                        <option value="3">Goa</option>
                        <option value="3">Andhra Pradesh</option>
                    </select>
                </div>
            </div>
            <button type="button" className="rounded-3 contactSelect">Get Started Now</button>
            <p className="my-3 text-center  text-muted">By registering, you agree to our Terms & Conditions</p>
        </form>
    )
}