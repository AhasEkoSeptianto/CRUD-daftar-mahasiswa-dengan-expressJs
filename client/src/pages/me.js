import React, { Component } from "react";
import "./../css/me.css";

class me extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageSkill: 0,
			imgSkill: [
				"html-5.svg",
				"css.svg",
				"javascript.svg",
				"python.svg",
				"nodejs.svg",
				"expressjs-ar21.svg",
				"mern.png",
				"django.png",
				"tkinter.png",
				"photoshop.jpeg",
				"linux.png",
				"mysql.png",
				"msoffice.png",
			],
			textSkill: [
				"html",
				"css",
				"javascript",
				"python",
				"node js",
				"express js",
				"mongo express react node js",
				"django",
				"tkinter",
				"adobe photoshop",
				"linux",
				"mysql",
				"microsoft office",
			],

			imgKnowledge: [
				"web_develop.jpeg",
				"desain.png",
				"linux.jpeg",
				"hacking.jpeg",
				"database.jpeg",
			],

			textKnowledge: [
				"web developer",
				"desainer",
				"operating system",
				"ethical hacking",
				"database administator",
			],

			pageKnowledge: 0,
		};
	}

	prevSkill = () => {
		if (this.state.pageSkill === 0) {
			console.log("pass");
		} else {
			this.setState({ pageSkill: this.state.pageSkill - 1 });
		}
	};

	nextSkill = () => {
		if (this.state.pageSkill === 12) {
			console.log("pass");
		} else {
			this.setState({ pageSkill: this.state.pageSkill + 1 });
		}
	};
	prevKnowledge = () => {
		if (this.state.pageKnowledge === 0) {
			console.log("pass");
		} else {
			this.setState({ pageKnowledge: this.state.pageKnowledge - 1 });
		}
	};

	nextKnowledge = () => {
		if (this.state.pageKnowledge === 4) {
			console.log("pass");
		} else {
			this.setState({ pageKnowledge: this.state.pageKnowledge + 1 });
		}
	};

	componentDidMount() {
		document.title = "about me";
		setTimeout(function () {
			var aboutText = document.getElementById("anim-about-text");
			aboutText.setAttribute("style", "opacity:1;margin-left:10px");
		}, 100);

		window.addEventListener("scroll", this.listenToScroll);
	}

	listenToScroll = () => {
		var top = document.documentElement.scrollTop; // mengambil event scrool ke variable
		console.log(top);
		if (top > 469) {
			document
				.getElementById("anim-educations")
				.setAttribute("style", "opacity:1;");
		}
		if (top > 810) {
			document
				.getElementById("skill")
				.setAttribute("style", "opacity:1;");
		}
		if (top > 1260) {
			document
				.getElementById("anim-hoby")
				.setAttribute("style", "opacity:1;");
		}
		if (top > 1680) {
			document
				.getElementById("seminar")
				.setAttribute("style", "opacity:1;");
		}
	};

	render() {
		return (
			<div>
				<div className="container-fluid container-nav-me">
					<a href="/">
						<div id="navbar-me" className="navbar-me-bg">
							<h3>Home</h3>
						</div>
					</a>
				</div>
				<div className="container-main">
					<div className="row">
						<div className="col-sm about-me" id="anim-about-text">
							<p>
								Hallo, saya biasa dipanggil EKO, Saya berumur 21
								tahun, saat ini saya kuliah di Stikom Cipta
								Karya Informatika Kampus D, saya adalah pecinta
								teknologi dan sangat suka dengan ilmu komputer /
								sains teknologi. saya seorang pekerja keras,
								cepat belajar dan senang mempelajari hal-hal
								baru, Hingga saat ini dalam hal teknologi Saya
								adalah seorang Web Development, Desktop
								Development dan Designer
							</p>
						</div>
						<div className="col-sm image-me" id="anim-about-img">
							<img
								src="./../image/gue.jpeg"
								className="image-me border border-dark img-thumbnail"
								alt="none"
							/>
							<h5>Ahas Eko Septianto</h5>
						</div>
					</div>
				</div>
				<div className="pintas">
					<ul>
						<li>
							<a href="#educations">Education</a>
						</li>
						<li>
							<a href="#skill">Skill & Knowledge</a>
						</li>
						<li>
							<a href="#hoby">Hobby</a>
						</li>
						<li>
							<a href="#seminar">Seminar</a>
						</li>
					</ul>
				</div>
				<div className="educations container" id="anim-educations">
					<h3>Education</h3>
					<div className="row">
						<div className="col-sm">
							<h5>SMK Patriot 1 Bekasi</h5>
							<p>Teknik Kendaraan Ringan</p>
						</div>
						<div className="col-sm">
							<p>2015 - 2018</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm">
							<h5>MTS Assalafiyah</h5>
						</div>
						<div className="col-sm">
							<p>2013 - 2015</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm">
							<h5>SDN Medan Satria III</h5>
						</div>
						<div className="col-sm">
							<p>2007 - 2013</p>
						</div>
					</div>
				</div>
				<div className="skill shadow" id="skill">
					<div className="row">
						<div className="col-sm">
							<h3>Skill</h3>
							<div className="mySkill">
								<a href="#none" onClick={this.prevSkill}>
									&#10094;
								</a>
								<img
									src={`./../image/${
										this.state.imgSkill[
											this.state.pageSkill
										]
									}`}
									alt="none"
								/>
								<a href="#none" onClick={this.nextSkill}>
									&#10095;
								</a>
							</div>
							<h5>
								{this.state.textSkill[this.state.pageSkill]}
							</h5>
						</div>
						<div className="col-sm">
							<h3>Knowledge</h3>
							<div className="myKnowledge">
								<a href="#none" onClick={this.prevKnowledge}>
									&#10094;
								</a>
								<img
									src={`./../image/${
										this.state.imgKnowledge[
											this.state.pageKnowledge
										]
									}`}
									alt="none"
								/>
								<a href="#none" onClick={this.nextKnowledge}>
									&#10095;
								</a>
							</div>
							<h5>
								{
									this.state.textKnowledge[
										this.state.pageKnowledge
									]
								}
							</h5>
						</div>
					</div>
				</div>
				<div className="hoby-container" id="hoby">
					<div className="container hoby" id="anim-hoby">
						<h3>hoby</h3>
						<div className="row">
							<div className="col-sm">
								<h5>Programing</h5>
								<img
									src="./../image/programing.png"
									alt="none"
								/>
							</div>
							<div className="col-sm">
								<h5>Explore hal hal baru</h5>
								<img src="./../image/explore.png" alt="None" />
							</div>
							<div className="col-sm">
								<h5>Membaca buku</h5>
								<img src="./../image/buku.jpeg" alt="none" />
							</div>
						</div>
					</div>
				</div>
				<div className="Seminar-container">
					<div className="container Seminar" id="seminar">
						<h3>Seminar</h3>
						<div className="row">
							<div className="col-sm">
								<h5>Kiat menjadi programer</h5>
								<img
									src="./../image/kiat menjadi programer-1.png"
									alt="none"
								/>
							</div>
							<div className="col-sm">
								<h5>Website dengan bootstrap</h5>
								<img
									src="./../image/membuat website dengan Bootstrap 4-1.png"
									alt="none"
								/>
							</div>
							<div className="col-sm">
								<h5>Monitoring Network</h5>
								<img
									src="./../image/real time networking-1.png"
									alt="none"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm">
								<h5>Cyber security dalam dunia pendidikan</h5>
								<img
									src="./../image/Sertifikat Cyber Security-1.png"
									alt="none"
								/>
							</div>
							<div className="col-sm">
								<h5>mempersiapkan sebagai software enginer</h5>
								<img
									src="./../image/Mempersiapkan diri sebagai software enginer.png"
									alt="none"
								/>
							</div>
							<div className="col-sm">
								<h5>
									Mempermudah belajar dengan menggunakan zoom
								</h5>
								<img src="./../image/zoom2.png" alt="none" />
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					&#169; copyright-by Ahas Eko Septianto
				</div>
			</div>
		);
	}
}

export default me;
