import React, { useState } from 'react';
import './description.css';

export function Description() {

    
    const [isTextVisible, setIsTextVisible] = useState(false);
      
    const toggleTextVisibility = () => {
    
        setIsTextVisible(!isTextVisible);

    };
    

    return(
        <div className="description-container">
            <div className={`description__text${isTextVisible ? 'visible' : ''}`}>
                <p className="description__par"> 
                    Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх батьків. Наш асортимент розроблений в діапазоні "від народження до школи", завдяки чому кожен етап розвитку вашої дитини буде максимально правильним, а головне, цікавим і радісним.
                </p>
                <p className="description__par">
                    Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки перевіреним виробникам та брендам, які давно і успішно представлені на світовому ринку. Магазин Бу-Бу є дистриб'ютором таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon, Huffy, Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako.
                </p>
                <p className="description__par">
                    На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій, в залежності від потреб: дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд, автокрісла, дитячий транспорт, іграшки, дитячий одяг.
                </p>
            </div>
            <button onClick={toggleTextVisibility} className='description__btn'>
                Докладніше
            </button>
        </div>
    )
}