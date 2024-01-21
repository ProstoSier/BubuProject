import Sidebar from "../Sidebar/Sidebar";
import SimpleSlider from "../Slider/Slider";
import './intro.css';


export function Intro() {
    return (
        <div className="intro">
            <div className="intro__sidebar">
                <Sidebar/>
            </div>
            <div className="intro__slider">
                <SimpleSlider/>
            </div>  
        </div>
    )
}