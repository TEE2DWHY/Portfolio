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
                                <div className="card"> <img src="images/Phantom-Wallet.png"
                                    className="card-img-top" alt="project1" />
                                    <div className="card-body">
                                        <p className="card-text"> Web3 authentication standard on the Solana Network to cache
                                            users to database and manage other on-chain features of
                                            users.. Give it a try at <a style={{ display: "#112240" }}
                                                href="https://tee2dwhy.github.io/PhatomWallet-AUTH/">Website.</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card"> <img src="images/Eth-Auth.png" className="card-img-top"
                                    alt="project1" />
                                    <div className="card-body">
                                        <p className="card-text">Web3 Authentication via wallet-connect on Eth and Bsc Network
                                            using Vanilla Js.. <br /> Visit <a style={{ display: "#112240" }}
                                                href="https://tee2dwhy.github.io/Web3-Auth/eth.html">Website.</a></p>
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