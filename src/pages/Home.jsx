
import HeroSection from "../components/HeroSection/HeroSection"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Program from "../components/Programs/Program"
import Placement from "../components/Placement/Placement"
import Study from "../components/Study/Study"
import Excellence from "../components/Excellence/Excellence"
import Global from "../components/Global/Global"
import Slider from "../components/Slider/Slide"

export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Slider/>
            <Program/>
            <Study/>
            <Excellence/>
            <Global/>
            <Placement/>
            <Footer/>
        </>
    )
}