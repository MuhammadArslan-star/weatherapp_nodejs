const express = require("express");
const path = require("path");
const hbs = require("hbs");
const http = require("http");
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.readFileSync(path.join(__dirname, "../templates/views/weather.hbs"), "utf-8");

const app = express();
const port = process.env.PORT || 8080;

const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const particle_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(particle_path);

app.use(express.static(staticPath));
// node code

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/weather", (req, res) => {

    res.render('weather_app');

});


app.get("/weather_app", (req, res) => {

    res.render('weather_app');

});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("*", (req, res) => {
    res.render('404error');
});

app.listen(port, () => {
    console.log(`Port is used ${port}`);
});