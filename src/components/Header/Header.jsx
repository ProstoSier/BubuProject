import React from 'react';
import './header.css';
import logo from '../Assets/logo.svg';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Contacts } from '../Contacts/Contacts';
import { HeaderLanguages } from '../HeaderLanguages/HeaderLanguages';
import { HeaderProfile } from '../HeaderProfile/HeaderProfile';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderButtons } from '../HeaderButtons/HeaderButtons';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__nav'>
                    <Link className='header__logo' to={"/"} ><img className='logo__img' src={logo} alt="logo" /></Link>
                    <HeaderMenu/>
                    <div className='header__buttons'>
                        <Contacts/>
                        <HeaderLanguages/>
                        <HeaderProfile/>
                    </div>                   
                </div>
                <div className='header__actions'>
                    <div className="header__actions-catalog catalog">
                        <div className="menu__icon">
                            <span></span>
                        </div>
                        <Link to='/products' className='catalog__title'>
                            Каталог
                        </Link>
                    </div>
                    <a className='header__actions-logo' href="/" ><img className='logo__img' src={logo} alt="logo" /></a>
                    <HeaderSearch/>
                    <HeaderButtons/>
                </div>
            </div>
            
        </header>
    )
}