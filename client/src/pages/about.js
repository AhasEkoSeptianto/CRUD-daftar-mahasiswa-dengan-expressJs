import React, { Component } from "react";
import "./../css/about.css";

class about extends Component {
  componentDidMount() {
    document.title = "home";

    // efek saat menyentuh pilihan pada explore
    var hoveringapp = document.getElementById("exploreapp");
    hoveringapp.addEventListener("mouseover", function () {
      hoveringapp.classList.add("shadow-lg");
    });
    hoveringapp.addEventListener("mouseout", function () {
      hoveringapp.classList.remove("shadow-lg");
    });

    var hoveringwhome = document.getElementById("exploreme");
    hoveringwhome.addEventListener("mouseover", function () {
      hoveringwhome.classList.add("shadow-lg");
    });
    hoveringwhome.addEventListener("mouseout", function () {
      hoveringwhome.classList.remove("shadow-lg");
    });

    var hoveringtalk = document.getElementById("exploretalk");
    hoveringtalk.addEventListener("mouseover", function () {
      hoveringtalk.classList.add("shadow-lg");
    });
    hoveringtalk.addEventListener("mouseout", function () {
      hoveringtalk.classList.remove("shadow-lg");
    });

    // handle semua event pada saat scrooling ke function
    window.addEventListener("scroll", this.listenToScroll);
  }

  // function untuk menghandel semua event scrooling
  listenToScroll = () => {
    var top = document.documentElement.scrollTop; // mengambil event scrool ke variable

    // menambah styles ke navbar
    var hoverNavAbout = document.getElementById("aboutNav");
    if (top > 570) {
      hoverNavAbout.addEventListener("mouseover", function () {
        hoverNavAbout.setAttribute(
          "style",
          "text-shadow: 2px 2px 10px #000000;font-weight:800;"
        );
      });
      hoverNavAbout.addEventListener("mouseout", function () {
        hoverNavAbout.setAttribute("style", "color:black");
      });
    } else {
      hoverNavAbout.addEventListener("mouseover", function () {
        hoverNavAbout.setAttribute(
          "style",
          "text-shadow: 2px 2px 10px black;font-weight:800;"
        );
      });
      hoverNavAbout.addEventListener("mouseout", function () {
        hoverNavAbout.setAttribute("style", "color:black");
      });
    }

    var hoverNavExplore = document.getElementById("explore");
    if (top > 570) {
      hoverNavExplore.addEventListener("mouseover", function () {
        hoverNavExplore.setAttribute(
          "style",
          "text-shadow: 2px 2px 10px #000000;font-weight:800;"
        );
      });
      hoverNavExplore.addEventListener("mouseout", function () {
        hoverNavExplore.setAttribute("style", "color:black");
      });
    } else {
      hoverNavExplore.addEventListener("mouseover", function () {
        hoverNavExplore.setAttribute(
          "style",
          "text-shadow: 2px 2px 10px black;font-weight:800;"
        );
      });
      hoverNavExplore.addEventListener("mouseout", function () {
        hoverNavExplore.setAttribute("style", "color:black");
      });
    }

    // menambahkan bg light pada nav
    var nav = document.getElementById("nav");
    if (top > 551) {
      nav.classList.add("bg-light");
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("bg-light");
      nav.classList.remove("shadow");
    }
    // animasi text about
    var about = document.getElementById("about");
    if (top > 200 && top < 700) {
      about.setAttribute("style", "margin-top:0px;opacity:1;");
    }

    // animasi text content list
    var content = document.getElementById("content");
    if (top > 790 && top < 2500) {
      content.setAttribute("style", "margin-top:0px;opacity:1;");
    }
  };

  render() {
    return (
      <>
        {/* navbar */}

        <ul className={`nav fixed-top justify-content-center`} id="nav">
          <li className={`nav-item`}>
            <span className={`nav-link active`} aria-current="page">
              <a className="link" id="aboutNav" href="/#about">
                About
              </a>
            </span>
          </li>
          <li className={`nav-item`}>
            <span className={`nav-link`}>
              <a className="link" id="explore" href="/#content">
                Explore
              </a>
            </span>
          </li>
        </ul>

        {/* end navbar */}

        {/* main */}
        <div className="container-jumbotron">
          <div className="background-image">
            <img
              src="./../image/gue2.png"
              className="jumbotron-text"
              alt="background"
            />
          </div>
          <h1>Ahas Eko Septianto</h1>
        </div>

        <div className={`container`}>
          <div className="about" id="about">
            <h1 className="about-header">About me</h1>
            <div className={`row g-0`}>
              <div className={`col-md-4`}>
                <img
                  src="./../image/about-me.png"
                  alt="i'am"
                  class="img-about"
                />
              </div>
              <div className={`col-md-8`}>
                <div className={`card-body`}>
                  <h5 className={`card-title text-header-about`}>
                    ~ Ahas Eko Septianto ~
                  </h5>
                  <p className={`card-text`}>
                    I am 21 years old, currently studying at the Cipta Karya
                    Informatika Stikom, I am very happy with computer science /
                    science technology. I am a hard worker, fast learner and
                    enjoy learning new things, until now in terms of technology
                    I am a Web Development, Desktop Development and Designer
                  </p>
                  <div>
                    <p className={`card-text floatLeft`}>
                      <small className={`text-muted`}>Bekasi 29-12-2020</small>
                    </p>
                    <a href="/Curiculum_Vitae.pdf" download>
                      <button
                        className={`btn btn-primary btn-sm floatRight resume`}
                      >
                        Resume
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-animated" id="content">
          <h1 className="explore-header">Let's explore</h1>
          <div className={`row  text-center content-list`}>
            <div className={`col-sm content-list-pages`}>
              <div className={`card shadow`} id="exploreapp">
                <img
                  src="./../image/explore.jpeg"
                  className="explore-image"
                  alt="my applications"
                />
                <div className={`card-body`}>
                  <h5 className={`card-title explore-header-list`}>
                    Collection of applications
                  </h5>
                  <p className={"card-text"}>
                    let's see what applications have been made !! consists of
                    website, desktop, mobile and design
                  </p>
                  <a href="application" target="_blank">
                    <button className={"btn btn-primary"}>
                      Explore all app
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-sm mid-list-content content-list-pages`}>
              <div className={"card shadow"} id="exploreme">
                <img
                  src="./../image/chat-me.png"
                  className="explore-image"
                  alt="who am i"
                />
                <div className={"card-body"}>
                  <h5 className={`card-title explore-header-list `}>
                    Who am i ?
                  </h5>
                  <p className={"card-text"}>
                    Who am I ? above I have told you a little about me, on the
                    next page I will show you who I really am
                  </p>
                  <a href="me" target="_blank">
                    <button className={"btn btn-primary"}>About me</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={`col-sm content-list-pages`}>
              <div className={"card shadow"} id="exploretalk">
                <img
                  src="./../image/diskus.png"
                  className="explore-image"
                  alt="let's talk"
                />
                <div className={"card-body"}>
                  <h5 className={`card-title explore-header-list `}>Chat me</h5>
                  <p className={"card-text"}>
                    if this information is still not enough let's discuss to
                    build a relationship between us, I have several social media
                  </p>
                  <a href="talk" target="_blank">
                    <button className={"btn btn-primary"}>
                      let's talk with me
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container-fluid 'footer'`}>
          <div className={"container"}>
            <div className="list-footer">
              <ul className="listFooter_ul">
                <li>&copy; Ahas Eko Septianto 16/11/2020 - 17/11/2020</li>
                <li>Happy Hacking &#x2665;</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default about;
