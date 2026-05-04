import './About.css'

export function About() {
    return (
        <section className="aboutPage" id="about">
            <header className="aboutPageHeader">
                <h2>Origin Story</h2>
            </header>

            <div className="aboutGrid">
                <article className="aboutPanel aboutMainPanel">
                    <span className="aboutKicker">Background</span>

                    <h3>From software engineering studies to real-world legacy systems.</h3>

                    <div className="aboutPanelBody">
                        <p>
                            I completed a Software Engineering course in Hull, where I built
                            my foundation in programming, databases, and web development.
                        </p>

                        <p>
                            I now work at Tribal with legacy business systems, using SQL,
                            Uniface, and problem-solving skills to understand, debug, and
                            improve existing software.
                        </p>
                    </div>
                </article>

                <article className="aboutPanel aboutArcPanel">
                    <span className="aboutKicker">Current Arc</span>

                    <h3>Growing as a developer</h3>

                    <p className="arcIntro">
                        Main quest: become stronger at .NET, APIs, React, and building
                        complete projects.
                    </p>
                </article>

                <article className="aboutPanel aboutTechPanel">
                    <span className="aboutKicker">Tech I use</span>

                    <div className="aboutTags">
                        <span>.NET</span>
                        <span>C#</span>
                        <span>SQL</span>
                        <span>Uniface</span>
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Git</span>
                        <span>REST APIs</span>
                    </div>
                </article>
            </div>
        </section>
    )
}