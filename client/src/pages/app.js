import { Component } from "react";
import "./../css/app.css";
import anime from "animejs/lib/anime.es.js";
import Axios from "axios";

class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            db: [],
            app: [],
        };
    }

    componentDidMount() {
        // connecsi api express
        Axios.get(`/api/`)
            .then((res) => {
                this.setState({ db: res.data.application });
                console.log(res.data.application);
            })
            .catch((e) => console.log(e));

        document.body.style = "background-color:#2B2B2B;";

        // dari sini adalah animasi portofolio yang akan dimunculkan pertama kali
        // memiliki tiga tahap tahap muncul, tahap balik pertama, tahap rotasi, tahap penutup
        // awal muncul animasi

        var anim = document.getElementById("animasi");
        var id = setInterval(animated1, 10);
        var acuan = 0;
        async function animated1() {
            if (acuan === 100) {
                clearInterval(id);
            }
            acuan++;
            anim.style.fontSize = acuan + "px";
        }

        // balik pertama
        setTimeout(function () {
            var anim = document.getElementById("animasi");
            var id = setInterval(animated2, 10);
            var acuan = 100;
            async function animated2() {
                if (acuan === 80) {
                    clearInterval(id);
                }
                acuan--;
                anim.style.fontSize = acuan + "px";
            }
        }, 2000);

        // rotate
        setTimeout(function () {
            var anim = document.getElementById("animasi");
            anime({
                targets: anim,
                rotateZ: 1050,
                loop: true,
                easing: "linear",
            });
        }, 3500);

        // closing
        setTimeout(function () {
            var anim = document.getElementById("animasi");
            var id = setInterval(animated4, 20);
            var acuanClosing = 80;
            async function animated4() {
                if (acuanClosing === 0) {
                    clearInterval(id);
                }
                acuanClosing--;
                anim.style.fontSize = acuanClosing + "px";
            }
        }, 3500);

        // clear animation to main
        setTimeout(function () {
            // ketika selesai animasi tag html animasi akan dibuang
            var animation = document.getElementById("container-animasi");
            animation.remove();

            // ketika onload navbar akan ditampilkan
            var nav = document.getElementById("navbar");
            nav.setAttribute("style", "opacity:1;");

            // ketika onload container aplikasi list akan dimuat
            document
                .getElementById("container-app")
                .setAttribute("style", "width:100%;height:100%;overflow:none;");

            // ketika onload applikasi akan memunculkan aplikasi pertama
            document.getElementById("0").setAttribute("style", "opacity:1");
        }, 8000);

        // navigation pada saat scrool jauh kebawah
        window.addEventListener("scroll", this.listenToScroll);
    }

    // function untuk menghandel semua animasi yang berjalan
    // pada scrool
    listenToScroll = () => {
        var top = document.documentElement.scrollTop; // mengambil variable scrool top

        // transisi ketika user scrool kebawah maka tombol kecil dibawah akan membantu user ketika ingin
        // kembali halaman ( navbar / top )dengan cepat
        var autoTop = document.getElementById("nav-top");
        if (top > 2000) {
            autoTop.setAttribute("style", "opacity:1;height:50px;");
        } else {
            autoTop.setAttribute("style", "opacity:0");
        }

        // logika ketika dapat databases dari backend lalu menampilkannya dalam bentuk looping
        // karena dengan looping akan menghemat line codingan
        // akan menampilkan beberapa list ketika user berada ditempat scrool yang telah diset pembuat
        // ketika user keluar dari batasan scrool yang dibuat maka list akan dihilangkan
        var rangeApplicationTop = 10;
        var rangeApplicationBot = 300;
        for (let i = 0; i < 10; i++) {
            if (top > rangeApplicationTop) {
                if (top > rangeApplicationTop && top < rangeApplicationBot) {
                    console.log("state = " + this.state.pos);
                    document
                        .getElementById(i)
                        .setAttribute(
                            "style",
                            "opacity:1;margin: 140px 0px 100px 0px;"
                        );
                    break;
                } else {
                    rangeApplicationTop += 550;
                    rangeApplicationBot += 590;
                    for (let i = 0; i < 10; i++) {
                        document
                            .getElementById(i)
                            .setAttribute(
                                "style",
                                "opacity:0;margin: 140px 0px 100px 0px;"
                            );
                    }
                }
            }
        }
    };

    render() {
        // animated untuk title
        document.title = "my applications";
        return (
            <>
                <div id="container-animasi" className="row">
                    <h1 id="animasi" className="blok animated">
                        Portofolio
                    </h1>
                </div>
                <div
                    className="container-fluid container-nav-about"
                    id="navbar"
                >
                    <a href="/">
                        <div id="navbar-about" className="navbar-about-bg">
                            <h3>Home</h3>
                        </div>
                    </a>
                </div>

                {/* application list */}
                <div className="container-my-app" id="container-app">
                    {this.state.db.map((data, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div className="row row-aplications" id={index}>
                                    <div className="col-sm image-aplications">
                                        <img
                                            src={data.image}
                                            className="img-fluid"
                                            alt="-"
                                        />
                                    </div>
                                    <div className="col-sm deksripsi-applications">
                                        <h5>{data.deksripsi}</h5>
                                        <a href={data.download} download>
                                            <button className="btn btn-primary mt-3">
                                                Download
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <div
                                        className="row row-aplications"
                                        id={index}
                                    >
                                        <div className="col-sm deksripsi-applications">
                                            <h5>{data.deksripsi}</h5>
                                            <a href={data.download} download>
                                                <button className="btn btn-primary mt-3">
                                                    Download
                                                </button>
                                            </a>
                                        </div>
                                        <div className="col-sm image-aplications">
                                            <img
                                                src={data.image}
                                                className="img-fluid"
                                                alt="-"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>

                <div className="nav-container">
                    <div
                        className="container-image-nav fixed-bottom"
                        id="nav-top"
                    >
                        <a href="#navbar" className="">
                            <img
                                src={"./../image/arrow.png"}
                                width="30px"
                                alt="-"
                            />
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default app;
