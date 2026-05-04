import { Link } from 'react-router-dom'
import './Hero.css'

export function Hero() {
    return (
        <section className="heroPage">
            <section className="introPanel">
                <p className="eyebrow">Personal Portfolio</p>

                <h1>
                    Daniel
                    <span>Ciszak</span>
                </h1>

                <p className="introText">
                    Software developer focused on business systems, SQL, and practical problem solving.
                </p>

                <div className="heroActions">
                    <Link to="/projects" className="primaryButton">
                        View Projects
                    </Link>

                    <Link to="/contact" className="secondaryButton">
                        Contact Me
                    </Link>
                </div>
            </section>

            <section className="portraitPanel">
                <div className="panelLabel">Main Character</div>

                <div className="portraitImageWrap">
                    <img
                        src="/daniel-comic.png"
                        alt="Comic-style portrait of Daniel Ciszak"
                        className="portraitImage"
                    />
                </div>
            </section>
        </section>
    )
}