import alinaTop from './assets/alina-head.jpg';
import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';
import photo5 from './assets/photo5.jpg';
import photo6 from './assets/photo6.jpg';
import photo7 from './assets/photo7.jpg';
import './App.scss';
import {Component} from "react";

export class Footer extends Component {

    redirectAuthorSite() {
        window.open('https://nazarii-pyndus.if.ua')
    }

    render() {
        return (
            <div className="alina-portfolio__footer">
                <h3 onClick={this.redirectAuthorSite}>Developed by Nazarii Pyndus</h3>
            </div>
        )
    }
}

function App() {
    const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
    const listItems = images.map((img) => <img src={img} alt=""/>);
    document.title = 'Alina Portfolio'

    return (
        <div className="alina-portfolio">
            <header className="alina-portfolio__header">
                <h1>Alina Portfolio</h1>
            </header>
            <div className="alina-portfolio__content">
                <div className="alina-portfolio__top">
                    <img src={alinaTop} alt=""/>
                </div>
                <div className="alina-portfolio__about">
                    <h3>
                        Hi, I'm Alina. <br/>
                        And I am an artist, I like to draw. <br/>
                        This is my personal website portfolio, where I will share my pictures.
                    </h3>
                </div>

                <div className="alina-portfolio__works">{listItems}</div>

                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
