import React, { Component } from "react";
import "./../css/talk.css";

class talk extends Component {
	// function untuk copie nomor handphone
	mynum() {
		var numberPhone = "085810217197";
		navigator.clipboard.writeText(numberPhone).then(
			function () {
				alert(
					"the number is 085810217197 \nhas been copied successfully to the clipboard"
				);
			},
			function (err) {
				alert("error");
			}
		);
	}

	componentDidMount() {
		document.title = "massage me";
		const userDevice = window.matchMedia("(min-width: 500px)");

		// regex untuk menentukan peralatan user jika true maka akan menjalankan programnya
		// jika false maka memberikan popup kepada user untuk mengaktifkan mode laptop dan tampilan akan
		// distop !!

		if (userDevice.matches) {
			// window width is at least 500px is true
			document.body.style = "background-color:#C4C4C4;";
			window.addEventListener("mousemove", Pos, false);

			function Pos(p) {
				var posY = 0;
				var posX = 0;
				// logika untuk membuat mata seolah-olah melihat bagian vertical
				if (p.pageY < 140) {
					posY = -30; // jika cursor ada paling top maka mata akan terlalu keatas
				} else if (p.pageY > 80 && p.pageY < 170) {
					posY = -15; // jika cursor didekat mata tapi masih dibawah maka akan sedikit melihat keatas
				} else if (p.pageY > 169 && p.pageY < 361) {
					posY = 0;
				} else if (p.pageY > 360 && p.pageY < 480) {
					posY = 15;
				} else {
					posY = 30;
				}

				//logika untuk membuat mata seolah-olah melihat bagian horizontal
				if (p.pageX < 120) {
					posX = -60;
				} else if (p.pageX > 119 && p.pageX < 286) {
					posX = -30;
				} else if (p.pageX > 285 && p.pageX < 1066) {
					posX = 0;
				} else if (p.pageX > 1065 && p.pageX < 1236) {
					posX = 30;
				} else {
					posX = 60;
				}

				// info.innerHTML =
				// 	"Position X : " + p.pageX + "<br />Position Y : " + p.pageY;
				// document.getElementsByClassName("seeing").style.marginTop =
				// 	pos + "px";
				var eyes = document.querySelectorAll(".seeing");
				eyes[0].style.marginTop = posY + "px";
				eyes[1].style.marginTop = posY + "px";
				eyes[0].style.marginLeft = posX + "px";
				eyes[1].style.marginLeft = posX + "px";
			}
		} else {
			// window width is less than 500px is true
			// maka aplikasi akan dihentikan
			var applications = document.getElementById("talk");
			// applications.remove();
			applications.innerHTML = "mohon gunakan mode desktop";
			alert("mohon gunakan mode desktop");
		}
	}

	render() {
		return (
			<div className="talk" id="talk">
				<div className="container container-nav-talk">
					<a href="/">
						<div id="navbar-talk" className="navbar-talk-bg">
							<h3>Home</h3>
						</div>
					</a>
				</div>
				<div className="container face">
					<div className="row">
						<div className="col-sm">
							<div className="alis"></div>
						</div>
						<div className="col-sm">
							<div className="alis"></div>
						</div>
					</div>
					{/* mata */}
					<div className="row">
						<div className="col-sm">
							<div className="eyes">
								<div className="seeing" id="seeing"></div>
							</div>
						</div>
						<div className="col-sm">
							<div className="eyes">
								<div className="seeing" id="seeing"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm">
							<div className="noise">
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="sosial-media-me">
						<div className="row">
							<ul>
								<li>
									<a href="https://api.whatsapp.com/send/?phone=6285351196080&text&app_absent=0">
										<img
											src="./../image/whatsapp.svg"
											width="50px"
											title="chat by whatsapp"
											alt="whatsapp"
										/>
										<p>Whatsapp</p>
									</a>
								</li>
								<li>
									<a href="#none" onClick={this.mynum}>
										<img
											src="./../image/phone.svg"
											width="50px"
											title="click to save number phone"
											alt="phone number"
										/>
										<p>Telphone</p>
									</a>
								</li>
								<li>
									<a
										href="https://t.me/AhasEkoSeptianto"
										target="_blank"
										rel="noreferrer"
										title="chat by telegram"
									>
										<img
											src="./../image/telegram.svg"
											width="50px"
											alt="telegram"
										/>
										<p>Telegram</p>
									</a>
								</li>
								<li>
									<a href="mailto:ahaseko1@gmail.com">
										<img
											src="./../image/gmail.svg"
											width="50px"
											title="chat by gmail"
											alt="gmail"
										/>
										<p>Gmail</p>
									</a>
								</li>
								<li>
									<a
										href="https://github.com/AhasEkoSeptianto"
										target="_blank"
										rel="noreferrer"
										title="see my repository"
									>
										<img
											src="./../image/github.svg"
											width="50px"
											alt="github"
										/>
										<p>Github</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default talk;
