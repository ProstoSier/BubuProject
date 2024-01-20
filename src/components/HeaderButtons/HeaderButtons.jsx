import './headerButtons.css';
import search from '../Assets/search.svg';
import comparison from '../Assets/сomparison.svg';
import favorite from '../Assets/favorite.svg';
import shopCart from '../Assets/shop-cart.svg';

export function HeaderButtons() {
    return (
        <div className='header__actions-btns'>
            <button className='header__actions-icon-search'><img className='header__actions-icon' src={search} alt="search" /></button>
            <a className='header__actions-btn' href="/"><img className='header__actions-icons' src={comparison} alt="comparison" /></a>
            <a className='header__actions-btn' href="/"><img className='header__actions-icons' src={favorite} alt="favorite" /></a>
            <a className='header__actions-btn' href="/"><img className='header__actions-icons' src={shopCart} alt="shop-cart" /></a>
        </div>
    )
}