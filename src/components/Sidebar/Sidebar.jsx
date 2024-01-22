import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import carriage from '../Assets/sidebar/carriage.svg';
import room from '../Assets/sidebar/room.svg';
import chair from '../Assets/sidebar/chair.svg';
import feeding from '../Assets/sidebar/feeding.svg';
import soap from '../Assets/sidebar/soap.svg';
import autochair from '../Assets/sidebar/autochair.svg';
import car from '../Assets/sidebar/car.svg';
import toy from '../Assets/sidebar/toy.svg';
import clothes from '../Assets/sidebar/clothes.svg';
import news from '../Assets/sidebar/new.svg';


const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className='sidebar__list'>
        <Link className='sidebar__list-link' to="/products" onClick={onClose}><img src={carriage} alt="carriage" />Дитячі коляски</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={room} alt="room" />Дитяча кімната</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={chair} alt="chair" />Стільці і шезлонги</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={feeding} alt="feeding" />Для годування</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={soap} alt="soap" />Гігієна і догляд</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={autochair} alt="autochair" />Автокрісла</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={car} alt="car" />Дитячий транспорт</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={toy} alt="toy" />Іграшки</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={clothes} alt="clothes" />Одяг</Link>
        <Link className='sidebar__list-link' to="/" onClick={onClose}><img src={news} alt="new" />Новий товар</Link>
      </ul>  
    </div>
  );
};

export default Sidebar;