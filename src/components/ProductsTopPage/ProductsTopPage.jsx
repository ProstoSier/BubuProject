import { Link } from "react-router-dom";
import './productsTopPage.css';

export function ProductsTopPage() {
    return (
        <div className="productsTopPage">
            <div className="productsTopPage__pages">
                <ul className="productsTopPage__pages-list">
                    <li className="productsTopPage__pages-item">
                        <Link className='productsTopPage__pages-link'>
                            Головна 
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="productsTopPage__block">
                <h2 className="productsTopPage__title titles">
                    Дитячі коляски
                </h2>
                <div className="productsTopPage__nav">
                    <ul className="productsTopPage__nav-list">
                        <li className="productsTopPage__nav-item">
                            <Link className="productsTopPage__nav-link">
                                За замовчуванням
                            </Link>
                        </li>
                        <li className="productsTopPage__nav-item">
                            <Link className="productsTopPage__nav-link">
                                По популярності
                            </Link>
                        </li>
                        <li className="productsTopPage__nav-item">
                            <Link className="productsTopPage__nav-link">
                                Дешевші
                            </Link>
                        </li>
                        <li className="productsTopPage__nav-item">
                            <Link className="productsTopPage__nav-link">
                                Дорожчі
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}