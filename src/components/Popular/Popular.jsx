import './popular.css';
import strollers from '../Assets/popular/strollers.png';
import pot from '../Assets/popular/pot.png';
import cot from '../Assets/popular/cot.png';
import linens from '../Assets/popular/bed.png';
import bath from '../Assets/popular/bath.png';
import puzzles from '../Assets/popular/puzzles.png';


export function Popular() {
    return (
        <div className="popular">
            <h2 className="popular__title titles">
                Популярні Категорії
            </h2>
            <div className='popular__grid-container'>
                <div className='popular__grid-block'>
                    <div className='popular__grid-big strollers'>
                        <a className='popular__grid-link' href='/'>
                            <h3 className='popular__grid-title'>
                                Коляски 2в1
                            </h3>
                            <img className='popular__grid-img' src={strollers} alt="strollers" />
                        </a>
                    </div>
                    <div className='popular__grid-small cot'>
                        <a lassName='popular__grid-link' href='/'>
                            <h3 className='popular__grid-title'>
                                Ліжечка
                            </h3>
                            <img className='popular__grid-img' src={cot} alt="cot" />
                        </a>
                    </div>
                    <div className='popular__grid-small pots'>
                        <a lassName='popular__grid-link' href='/'>
                           <h3 className='popular__grid-title'>
                                Горщики
                            </h3>
                            <img className='popular__grid-img' src={pot} alt="pots" />
                        </a>
                    </div>    
                </div>
                <div className='popular__grid-block reverse'>
                    <div className='popular__grid-big linens'>
                        <a lassName='popular__grid-link' href='/'>
                            <h3 className='popular__grid-title'>
                                Постільна білизна
                            </h3>
                            <img className='popular__grid-img' src={linens} alt="linens" />
                        </a>
                    </div>
                    <div className='popular__grid-small puzzle'>
                        <a lassName='popular__grid-link' href='/'>
                            <h3 className='popular__grid-title'>
                                Пазли
                            </h3>
                            <img className='popular__grid-img' src={puzzles} alt="puzzles" />
                        </a>
                    </div>
                    <div className='popular__grid-small bathtubs'>
                        <a lassName='popular__grid-link' href='/'>
                            <h3 className='popular__grid-title'>
                                Ванночки
                            </h3>
                            <img className='popular__grid-img' src={bath} alt="bath" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}