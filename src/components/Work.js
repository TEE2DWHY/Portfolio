import React from "react";

function Work() {
    return (
        <section id="work">
            <div className="container work-container">
                <div className="row">
                    <div className="col-lg-12">
                        <h5><span className="numeric-01">02.</span><span className="work-header">Work??</span></h5> <br />
                        <div className="row card-container">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card"> <img src="images/Team-Defi-(React).png"
                                    className="card-img-top" alt="project1" />
                                    <div className="card-body">
                                        <p className="card-text">Team decentralized finance website built using reactJS (props
                                            and map functions), nodejs,
                                            mongodb and solidity.<a style={{ display: "#112240" }}
                                                href="https://team-defi.netlify.app/">Website.</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card"> <img src="images/isend.png"
                                    className="card-img-top" alt="project1" />
                                    <div className="card-body">
                                        <p className="card-text">Built a logistic web app (launch-page) for delivery of goods and various products using ReactJs. <a style={{ display: "#112240" }}
                                            href="https://isend-logistic.netlify.app">Website.</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card"> <img src="images/unboxed.png" className="card-img-top"
                                    alt="project1" />
                                    <div className="card-body">
                                        <p className="card-text">Unboxed Luxury is a shoe e-commerce website built using reactJs. You should check it out.<br /> Visit <a style={{ display: "#112240" }}
                                                href="https://unboxedluxury.netlify.app">Website.</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;