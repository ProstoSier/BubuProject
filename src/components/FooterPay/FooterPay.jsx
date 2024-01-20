import mastercard from '../Assets/footer/mastercard.svg';
import visa from '../Assets/footer/visa.svg';
import liqpay from '../Assets/footer/liqpay.svg';
import './footerPay.css';

export function FooterPay() {
    return (
        <div className='footer__pay'>
            <a className='footer__pay-icon' href="/"><img src={mastercard} alt="mastercard" /></a>
            <a className='footer__pay-icon' href="/"><img src={visa} alt="visa" /></a>
            <a className='footer__pay-icon' href="/"><img src={liqpay} alt="liqpay  " /></a>
        </div>
    )
}