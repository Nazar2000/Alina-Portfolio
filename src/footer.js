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
