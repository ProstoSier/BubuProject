import SliderBrends from "../SliderBrends/SliderBrends";
import './brends.css';

export function Brends() {
    return (
        <div className="brends">
            <h1 className="brends__title titles">
                Популярні Категорії
            </h1>
            <div className="brends__slider">
                <SliderBrends/>
            </div>
        </div>
    )
}