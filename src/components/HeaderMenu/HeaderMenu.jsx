import './headerMenu.css';

export function HeaderMenu() {
    return (    
        <ul className='header__menu'>
            <li className="header__menu-items"><a className='header__menu-link' href='/'>Про нас</a></li>
            <li className="header__menu-items"><a className='header__menu-link' href='/'>Контакти</a></li>
            <li className="header__menu-items"><a className='header__menu-link' href='/'>Доставка і оплата</a></li>
            <li className="header__menu-items"><a className='header__menu-link' href='/'>Повернення і обмін</a></li>
        </ul>
    )      
}