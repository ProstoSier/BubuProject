import './footer.css';
import { MdArrowForward } from "react-icons/md";
import people from '../Assets/footer/people.png';
import instagram from '../Assets/s-inst.svg';
import youtube from '../Assets/s-youtube.svg';
import facebook from '../Assets/s-fb.svg';
import { FooterPay } from '../FooterPay/FooterPay';


export function Footer() {
    return (
        <footer className="footer">
            <div className='footer__bg-img'>
                <div className="footer__top __container">
                    <div className='footer__top-block'>
                        <h2 className='footer__top-title'>
                            Отримуйте ПРОМОКОДИ ТА ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ
                        </h2>
                        <form className='footer__top-form' action="">
                            <input className='footer__top-input' type="text" placeholder='Ваш email'/>
                            <button className='footer__top-btn'><MdArrowForward className='footer__top-arr'/></button>
                        </form>
                    </div>
                    <img className='footer__top-img' src={people} alt="people" />
                </div>  
            </div>
            <div className="footer__nav">
                    <div className="footer__about-max">
                        <ul className='footer__about-list'>
                            <li className='footer__about-items'><a className='footer__about-item tel' href="tel:">(063) 128-46-09</a></li>
                            <li className='footer__about-items'><a className='footer__about-item  email' href="/">bubu.shop2018@gmail.com</a></li>
                            <li className='footer__about-items'><a className='footer__about-item' href="/">Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)</a></li>
                        </ul>
                        <div className='footer__about-social'>
                        <a className='socials__inst' href="/"><img src={instagram} alt="instagram" /></a>
                            <a className='socials__youtube' href="/"><img src={youtube} alt="youtube" /></a>
                            <a className='socials__facebook' href="/"><img src={facebook} alt="facebook" /></a>
                        </div>
                    </div>  
                <div className='footer__info __container'>
                    <div className="footer__about-block">
                        <ul className='footer__about-list'>
                            <li className='footer__about-items'><a className='footer__about-item tel' href="tel:">(063) 128-46-09</a></li>
                            <li className='footer__about-items'><a className='footer__about-item  email' href="/">bubu.shop2018@gmail.com</a></li>
                            <li className='footer__about-items'><a className='footer__about-item' href="/">Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)</a></li>
                        </ul>
                        <div className='footer__about-social'>
                            <a className='socials__inst' href="/"><img src={instagram} alt="instagram" /></a>
                            <a className='socials__youtube' href="/"><img src={youtube} alt="youtube" /></a>
                            <a className='socials__facebook' href="/"><img src={facebook} alt="facebook" /></a>
                        </div>
                    </div>
                    <div className='footer__informations'>
                        <h2 className='footer__column-title'>
                            Інформація
                        </h2>
                        <ul className='footer__columns'>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Про нас</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Контакти</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Доставка і оплата</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Повернення та обмін</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Політика конфеденційності</a></li>
                        </ul>
                    </div>
                    <div className='footer__catalog-columns'>
                        <h2 className='footer__column-title'>
                            Каталог
                        </h2>
                        <ul className='footer__columns'>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Дитячі коляски</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Дитяча кімната</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Стільці і шезлонги</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Все для годування</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Гігієна та догляд</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Автокрісла</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Дитячий транспорт</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Іграшки</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Дитячий одяг</a></li>
                            <li className="footer__column-items"><a className='footer__column-item' href="/">Новий товар</a></li>
                        </ul>           
                    </div>
                </div>
                <div className='footer__other __container'>
                    <span className='footer__copyright'>© Bubu 2022. Всі права захищені.</span>
                    <FooterPay/>
                </div>
            </div>
        </footer>
    )
}