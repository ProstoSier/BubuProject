import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ProductsTopPage } from "../components/ProductsTopPage/ProductsTopPage";

export function Products() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <main className="main __container">
                    <ProductsTopPage/>
                </main>
                <Footer/>
            </div>
        </>
    )
}