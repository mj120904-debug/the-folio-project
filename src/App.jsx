import React from 'react';

const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <section id="about">
                <h1>About</h1>
                <p>This is the About section of your portfolio.</p>
            </section>
            <section id="projects">
                <h1>Projects</h1>
                <p>This is the Projects section where you can showcase your work.</p>
            </section>
            <section id="contact">
                <h1>Contact</h1>
                <p>This is the Contact section where people can reach you.</p>
            </section>
        </div>
    );
};

export default App;
