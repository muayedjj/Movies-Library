"use strict"
const express = require("express");
const cors = express("cors")
const app = express()
app.use(cors(/*filler*/));
const PORT = 3000
const movieReview = require("./Movie_Reviews/data.json")
const { append } = require("express/lib/response");

//routes
app.get("/", homehandler);
app.get("/favourites", favhandler);
app.get("moviereview", reviewhandler);
app.get("*", errorhandler);

//functions
function homehandler(req, res) {
    res.send("Home")
}

function favhandler(req,res) {
    res.send("Welcome to Favorite Page");
}

function errorhandler(req, res) {
    res.send("Sorry, your request can't be met")}

function reviewhandler(req,res) {
    let review = {
        this:title = data.title,
        this:poster_path =data.poster_path,
        this:overview = data.overview
    };
    res.send (review);
};




function errorhandler (req, res) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
} 

append.listen(PORT, () => {
    console.log(`Example app listenning on port ${PORT}`);
});