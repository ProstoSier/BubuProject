import search from '../Assets/search.svg';
import './headerSearch.css';

export function HeaderSearch() {
    return (
    <div className='header__actions-search'>
        <form className='header___actions-form' action="/">
               <input className='header__actions-input' type="text" placeholder='Я шукаю...' /> 
             <button className='header__actions-icon-search'><img className='header__actions-icon' src={search} alt="search" /></button>
        </form>
    </div>
    )
}