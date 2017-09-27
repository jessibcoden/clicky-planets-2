"use strict";

const planets = require('./planets');

$('#showButton').mouseover(() => { //this is an event listener
	//all the planets to show
	createDomString(planets.getPlanets());
});

const createDomString = (planetz) => {
	let planetString = '';

    for(let i=0; i<planetz.length; i++){
        let newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (strang) => {
	$('#planetHolder').html(strang);
};

$('body').on('click', '.planetImage', (event) => { 
	console.log(event);
	$(event.target).prev().removeClass('hidden'); //will see show and hide used but it's not the best practice b/c it requires inline styling
});

$('#clearButton').click(() => {
	let imageInfo = planets.getImageData();
	$('#planetHolder').html(`<h2>${imageInfo.title}</h2>`);
	$('#planetHolder').append(`<p>${imageInfo.explanation}</p>`);
});

$('#searchText').keypress((event) => {
	if (event.key === 'Enter') {
		console.log($('#searchText').val());
		let txt = $('#searchText').val();
		let planetData = planets.getPlanets();
        let results = planetData.filter(function(thing){
            return thing.name.indexOf(txt)>-1;
        });
 		createDomString(results);
 		$('.planetName').removeClass("hidden"); //displays panet names 
	}
});

module.exports = {};


