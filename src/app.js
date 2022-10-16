import './App.scss';
import {
    Route, Routes, useNavigate,
} from "react-router-dom";
import {Album} from "./album";
import {Landing} from "./landing";
import {Footer} from "./footer";
import arrowBack from "./assets/arrow-back.png";

function App() {
    document.title = 'Alina\'s Portfolio'
    const navigate = useNavigate();
    const arrowBackClass = window.location.toString().includes("album") ? 'back-icon' : 'hidden back-icon'
    const backToHome = () => navigate('/', {replace: true});

    return (
        <div>
            <header className="alina-portfolio__header">
                <img className={arrowBackClass} src={arrowBack} alt="" onClick={backToHome}/>
                <h1>Alina's Portfolio</h1>
            </header>
            <div className="alina-portfolio">
                <div className="alina-portfolio__content">
                    <Routes>
                        <Route path="/" element={<Landing/>}></Route>
                        <Route path="/album" element={<Album/>}></Route>
                        <Route path="*" element={<Landing/>}></Route>
                    </Routes>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default App;
