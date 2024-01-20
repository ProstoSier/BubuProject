import './contacts.css';
import instagram from '../Assets/s-inst.svg';
import youtube from '../Assets/s-youtube.svg';
import facebook from '../Assets/s-fb.svg';

export function Contacts() {
    return (
        <div className='header__contacts'>
            <div className='header__contacts-phones'>
                <a className='header__contacts-tel' href="tel:">(063) 128-46-09</a>
            </div>
            <div className='header__contacts-socials socials'>
                <a className='socials__inst' href="/"><img src={instagram} alt="instagram" /></a>
                <a className='socials__youtube' href="/"><img src={youtube} alt="youtube" /></a>
                <a className='socials__facebook' href="/"><img src={facebook} alt="facebook" /></a>
            </div>
        </div>
    )
}