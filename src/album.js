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
import photo10 from "./assets/photo10.jpeg";
import photo11 from "./assets/photo11.JPG";
import photo12 from "./assets/photo12.JPG";
import photo13 from "./assets/photo13.jpeg";
import photo14 from "./assets/photo14.jpeg";
import photo15 from "./assets/photo15.jpeg";
import photo16 from "./assets/photo16.jpeg";
import photo17 from "./assets/photo17.jpeg";
import photo18 from "./assets/photo18.jpg";
import photo19 from "./assets/photo19.jpg";
import photo20 from "./assets/photo20.jpg";
import photo21 from "./assets/photo21.jpeg";
import photo22 from "./assets/photo22.JPG";
import photo24 from "./assets/photo24.jpeg";
import photo25 from "./assets/photo25.jpeg";
import './App.scss';

export class Album extends Component {

    redirectAuthorSite() {
        window.open('https://nazarii-pyndus.if.ua')
    }

    render() {
        const myLittlePonyPictures = [photo12, photo6];
        const flowersPictures = [photo15, photo14, photo13]
        const sketchPictures = [photo8, photo10, photo5, photo25, photo2]
        const mythsPictures = [photo11, photo3, photo16, photo9, photo17, photo24, photo1]
        const ukrainePictures = [photo7, photo20]
        const otherPictures = [photo21, photo22, photo19, photo18, photo4]

        const listMyLittlePonyPictures = myLittlePonyPictures.map((img, i) => <img src={img} alt="" key={i}/>);
        const listFlowersPictures = flowersPictures.map((img, i) => <img src={img} alt="" key={i}/>);
        const listSketchPictures = sketchPictures.map((img, i) => <img src={img} alt="" key={i}/>);
        const listMythsPictures = mythsPictures.map((img, i) => <img src={img} alt="" key={i}/>);
        const listUkrainePictures = ukrainePictures.map((img, i) => <img src={img} alt="" key={i}/>);
        const listOtherPictures = otherPictures.map((img, i) => <img src={img} alt="" key={i}/>);
        window.scrollTo(0, 0);

        return (
            <div className="album-block">
                <div className="alina-portfolio__works">
                    <h3 className="group-name">My little Pony:</h3>
                    {listMyLittlePonyPictures}
                </div>
                <div className="alina-portfolio__works">
                    <h3 className="group-name">Flowers:</h3>
                    {listFlowersPictures}
                </div>
                <div className="alina-portfolio__works">
                    <h3 className="group-name">Sketch:</h3>
                    {listSketchPictures}
                </div>
                <div className="alina-portfolio__works">
                    <h3 className="group-name">Myths:</h3>
                    {listMythsPictures}
                </div>
                <div className="alina-portfolio__works">
                    <h3 className="group-name">Ukraine:</h3>
                    {listUkrainePictures}
                </div>
                <div className="alina-portfolio__works">
                    <h3 className="group-name">Other:</h3>
                    {listOtherPictures}
                </div>
            </div>
        )
    }
}
