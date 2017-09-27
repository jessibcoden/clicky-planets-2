"use strict";

let planets = [];
let imageData = {};

//load in planets.json using AJAX
$.get('../db/planets.json').done ((data) => { //.get method retreives data and .done method executes function, if load is successful, .fail executes function if load fails
	planets = data.planets;
}).fail((error) => {
	console.log('error', error);
});

$.ajax('https://api.nasa.gov/planetary/apod?api_key=cML4iFHlbQ0IUTnGJROHnsbAfZ3Dl6TMWimdwSNY').done((data) => {
	$('body').css('background-image', `url(${data.url})`);
	imageData = data;
}).fail((error) => {
	console.log(error);
});

const getPlanets = () => {
	return planets;
};

const getImageData = () => {
	return imageData;
};

module.exports = {getPlanets, getImageData};