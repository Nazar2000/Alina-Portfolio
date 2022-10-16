import alinaTop from "./assets/alina-head.jpg";
import {Link} from "react-router-dom";
import {Component} from "react";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpeg";
import photo6 from "./assets/photo6.jpg";
import photo7 from "./assets/photo7.jpg";
import photo8 from "./assets/photo8.jpeg";
import photo9 from "./assets/photo9.jpeg";
import './App.scss';

export class Landing extends Component {

    render() {
        const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
        const listItems = images.map((img, i) => <img src={img} alt="" key={i}/>);

        return (
            <div>
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

                <div className="alina-portfolio__works">
                    {listItems}
                </div>

                <div className="show-all-btn-block">
                    <button className="show-all-btn">
                        <Link to="/Alina-Portfolio/album">Show All</Link>
                    </button>
                </div>
            </div>
        )
    }
}
