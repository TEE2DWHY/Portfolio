import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid"> <a className="navbar-brand" href="/#"><img className="logo" src="images/letter-t (1).png"
                alt="logo" /></a> <button class="navbar-toggler drop-icon" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li className="nav-item item-list"> <a class="nav-link" href="#about"><span class="numeric">01.
                        </span><span className="nav-details">About</span></a> </li>
                        <li className="nav-item"> <a class="nav-link" href="#projects"><span class="numeric">02.
                        </span><span className="nav-details">Experience</span></a> </li>
                        <li className="nav-item"> <a class="nav-link" href="/#"><span class="numeric">03.
                        </span><span className="nav-details">Work</span></a> </li>
                        <li className="nav-item"> <a class="nav-link" href="#contact"><span class="numeric">04.
                        </span><span className="nav-details">Contact</span></a> </li>
                        <li className="nav-item"> <a class="nav-link" href="Tech-Resume.pdf"><button
                            className="resume-btn">Resume</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
