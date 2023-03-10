import React from "react";

function Features() {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 features">
                        <p className="numeric-01">Hi, my name is</p>
                        <h1 className="header-name">Olorunfemi Tayo.</h1>
                        <h3 className="h3-features">I build things for the web.</h3>
                        <p className="p-1">I’m a software engineer specializing in building (and occasionally designing)
                            exceptional digital experiences. Currently, I’m focused on building accessible, human-centered
                            products with great user <span className="acryn-green">Experience.</span> </p>
                                <a href="https://github.com/TEE2DWHY?tab=repositories"><button
                                    className="projects">check out my projects!</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;