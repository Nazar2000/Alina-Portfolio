import {Component} from "react";

export class Footer extends Component {

    redirectAuthorSite() {
        window.open('https://nazarii-pyndus.if.ua')
    }

    render() {
        return (
            <div className="alina-portfolio__footer">
                <ul>
                    <li>
                        <h6>Version:</h6><span>© 2022 Alina Pyndus. All Rights Reserved.</span>
                        <h5 onClick={this.redirectAuthorSite}>Developed by Nazarii Pyndus</h5>
                    </li>
                    <li>
                        <h6>Socials:</h6>
                        <ul className="socials-media">
                            <li>
                                <a href="https://www.instagram.com/alink3250/"
                                   target="_blank">
                                    <span>My Instagram</span>
                                    <img src="https://nazar2000.github.io/angular-portfolio/assets/images/instagram.svg"
                                         alt=""/>
                                </a>
                                </li>
                                <li>
                                <a href="https://www.instagram.com/m_alin32_art/"
                                   target="_blank">
                                    <span>Portfolio Instagram</span>
                                    <img src="https://nazar2000.github.io/angular-portfolio/assets/images/instagram.svg"
                                         alt=""/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        )

    }
}
