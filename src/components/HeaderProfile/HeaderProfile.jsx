import user from '../Assets/user.svg';
import './headerProfile.css';

export function HeaderProfile() {
    return (
        <div className='header__buttons-profile profile'>
            <button className='profile__btn'><img className='progile__btn-icon' src={user} alt="user" /></button>
            <button className='profile__btn enter'>Вхід</button>
        </div>
    )
}