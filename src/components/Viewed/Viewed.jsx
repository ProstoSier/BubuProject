import ViewSlider from "../ViewedSlider/ViewedSlider";
import './viewed.css';

export function Viewed() {
    return (
        <div className="viewed">
            <h2 className="viewed__title titles">
                Ви переглядали
            </h2>
            <div className="viewed__slider">
                <ViewSlider/>
            </div>
        </div>
    )
}