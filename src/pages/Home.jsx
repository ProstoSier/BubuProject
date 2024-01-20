
import { Brends } from "../components/Brends/Brends";
import { Description } from "../components/Description/Description";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Intro } from "../components/Intro/Intro";
import { Popular } from "../components/Popular/Popular";
import { Shares } from "../components/Shares/Shares";
import { Viewed } from "../components/Viewed/Viewed";

export function Home() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <main className="main __container">
                    <Intro/>
                    <Shares/>
                    <Popular/>
                    <Brends/>
                    <Description/>
                    <Viewed/>
                </main>
                <Footer/>
            </div>
        </>
    )
}