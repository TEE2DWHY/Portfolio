import React from "react";

function Project() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h5>
              <span className="numeric-01">03.</span>
              <span className="project-header">Some Things I’ve Built</span>
            </h5>{" "}
            <br />
            <div className="content-container">
              <img className="code" src="images/Vscode.png" alt="code" />
            </div>
          </div>
          <div className="col-lg-4 ml-0">
            {" "}
            <br />
            <h5 className="numeric-01">Featured Project</h5>
            <p style={{ color: "#fff" }}>
              Building of a blockchain using (python) the POW consensus
              mechanism alongside its protocol (cryptocurrency) & smart
              contracts.
              <a
                class="acryn-green"
                href="https://github.com/TEE2DWHY/Blockchain-Dev"
              >
                {" "}
                Check out.
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <br />
            <div className="content-container">
              <img
                className="code img-fluid"
                src="images/this-that.png"
                alt="this-that"
              />
            </div>
          </div>
          <div className="col-lg-4 ml-0">
            <br />
            <h5 className="numeric-01">Featured Project</h5>
            <p style={{ color: "#fff" }}>
              This is an online game website that can be played with your
              friends. It's simply you selecting your choices and having your
              friends guess the choices you selected.
              <br />
              Frontend: ReactJs, CSS & HTML, axios.
              <br />
              Backend: Nodejs & Express Js, MongoDB.
              <a class="acryn-green" href="https://triivia.netlify.app">
                Check out.
              </a>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container container-project">
        <h3 className="other-projects">Other Noteworthy Projects</h3>
        <a class="numeric-01 archive" href="https://github.com/TEE2DWHY">
          view the archive
        </a>
        <br /> <br />
        <div className="container">
          <div className="row projects">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card">
                {" "}
                <img
                  src="images/project1.png"
                  className="card-img-top"
                  alt="project1"
                />
                <div className="card-body">
                  <p className="card-text">
                    A project that estimates the human life span (with an
                    assumption of 90yrs as the max lifespan). Built using
                    bootstrap, nodeJS, express and ejs. Visit{" "}
                    <a
                      style={{ display: "#112240" }}
                      href="https://polar-dawn-41842.herokuapp.com/"
                    >
                      Website.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card">
                {" "}
                <img
                  src="images/project2.png"
                  class="card-img-top"
                  alt="project1"
                />
                <div className="card-body">
                  <p className="card-text">
                    {" "}
                    The Love Meter Detector!🕶. A Love Calculator that tells you
                    the strength between you and your partner. Give it a try at{" "}
                    <a
                      style={{ display: "#112240" }}
                      href="https://tee2dwhy.github.io/loveCalc/"
                    >
                      Website.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="card">
                {" "}
                <img
                  src="images/project3.png"
                  className="card-img-top"
                  alt="project1"
                />
                <div className="card-body">
                  <p className="card-text">
                    Dice games are games that use or incorporate one or more
                    dice as their sole or central component. This output two
                    dice where the dice with the highest number wins. Visit{" "}
                    <a
                      style={{ display: "#112240" }}
                      href="https://tee2dwhy.github.io/Dice-Game/"
                    >
                      Website.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
