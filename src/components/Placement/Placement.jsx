import Heading from "../Programs/Headings";
import Profile from "./Profile";


export default function Placement() {

    let heading = {
        btn: "Success Stories",
        h1: "Top Placements",
        h5: "Our students are making a mark in top global companies with record-breaking packages."
    }
    let profile = [
        {
            image: "/images/p1.avif",
            p_name: "Rohit Jain",
            branch: "B.Tech CSE",
            company: "Amazon",
            ctc: "₹ 1 Crore"
        },
        {
            image: "/images/p2.avif",
            p_name: "Aakanksha",
            branch: "MBA",
            company: "Google",
            ctc: "₹ 30 Crore"
        },
        {
            image: "/images/p3.jpeg",
            p_name: "Amit Sharma",
            branch: "BTECH",
            company: "Microsoft",
            ctc: "₹ 50 Crore"
        },
        {
            image: "/images/p2.avif",
            p_name: "Aakanksha",
            branch: "MBA",
            company: "Google",
            ctc: "₹ 30 Crore"
        },
        {
            image: "/images/p1.avif",
            p_name: "Priya Singh",
            branch: "LAW",
            company: "Khaitan & Co",
            ctc: "₹ 25 Crore"
        },
    ]


    return (
        <div className="container-fluid p-1 p-md-5" id="admission">
            <Heading heading={heading} />
            <div className="p-1 p-md-5 my-5 my-md-0 d-flex flex-wrap justify-content-center justify-content-md-between gap-5">
                <Profile profile={profile[0]} />
                <Profile profile={profile[1]} />
                <Profile profile={profile[2]} />
                <Profile profile={profile[3]} />
                <Profile profile={profile[4]} />
            </div>

        </div>
    )
}