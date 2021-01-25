const express = require("express");
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();

// Conteroller
const controller = require("./server/Controller/about");

app.use(cors());

app.route("/api").get(controller.index).post();

if (
	process.env.NODE_ENV === "production" ||
	process.env.NODE_ENV === "staging"
) {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname + "/client/build/index.html"));
	});
}

app.listen(port, () => console.log("run"));
