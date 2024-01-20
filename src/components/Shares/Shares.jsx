
import SliderShares from '../SliderShares/SliderShares';
import './shares.css';

export function Shares() {
    return (
        <div className="shares">
            <h2 className='shares__title titles'>
                Акція!<span className='sale'>SALE</span>
            </h2>
            <div >
                <SliderShares sliderId='slider2'/>
            </div>
        </div>
    )
}