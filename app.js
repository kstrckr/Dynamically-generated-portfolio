"use strict";

//initialize foundation for off-canvas nav
$(document).foundation();

//--------Variables--------

//will hold the final generated gallery for display
const generatedGallery = [];

//holds all buttons for adding event listeners
const allButtons = document.getElementsByClassName("gallery-select");

//holds all generated image containers for use in hiding/showing matching categories
const arrOfFullImages = document.getElementsByClassName("full-shot");


//--------Function Expressions--------

//creates an array of objects, each of which holds the .color and category (hex color and a, s, j, h for accessories, shoes, jewelry, homegoods)
const galleryCreate = (array, index, output) => {
	let tempObj = {};
  	tempObj.color = "#"+array[index].substr(0,6);
	tempObj.name = array[index];
	tempObj.category = array[index].substr(-5,1)
	output.push(tempObj);

	if (index === array.length-1){
		return;
	}

	galleryCreate(array, index+1, output)
};

//generates the divs that will make up each individual shot
const createOutput = (i) => {
	//targets the output div that already exists in index.html
	let target = document.getElementById("output");

	//this section generates the divs that will be nested to create each gallery image
	let bgDiv = document.createElement("div");

	let imageHolder = document.createElement("div");

	let newPhoto = document.createElement("img");

	//defines the image URL based on file name stored in galleryArray
	let imgUrl = "imgs/" + generatedGallery[i].name;

	//pulls the background color from the beginning of the file name of each element in galleryArray
	let bgColor = generatedGallery[i].color;

	//sets the <img src=
	newPhoto.setAttribute("src", imgUrl);

	//sets the background color defined in file name
	bgDiv.style.background = bgColor;

	//this section sets up the class names for styling w/ style.css
	bgDiv.className = "full-shot";
	bgDiv.dataset.category = generatedGallery[i].category;

	imageHolder.className = "image-holder";

	newPhoto.className = "image-main";

	//this section nests the divs in the proper order to create each gallery image w/ background and number

	bgDiv.appendChild(imageHolder);
	imageHolder.appendChild(newPhoto);
	

	//appends the completed bgDiv to the output class in index.html
	target.appendChild(bgDiv);
	
	//advances loading bar with each image load then fades and removes mask element when all images are loaded
	newPhoto.onload = loadingBar;

	//exits the recursive createOutput function at end of galleryArray
	if (i === generatedGallery.length-1){
		//alert(imgUrl);
		return;
	};



	createOutput(i + 1);
};

//this function manages the loading bar and the removal of the loading screen when all images are displayed
const loadingBar = () => {
		
		let currentPercent = parseFloat(document.getElementById("progressBar").style.width)
		
		let max = galleryArray.length;
		let newPercent = currentPercent + 1/max*100;
		
		document.getElementById("progressBar").style.width = Math.floor(newPercent) + "%";
		if (newPercent >= 95) {
			setTimeout(()=>{document.getElementById("mask").style.opacity = "0"}, 250);
			setTimeout(function(){document.getElementById("mask").style.display = "none"}, 2000);
		}
	}

//is called by clicking the gallery selection buttons. Hides all non-matching cateogry images and shows all matches
const hideOrShow = (initiator, target) => {
    let hNumber = 1;
	for(let i = 0; i < target.length; i++){
		if(target[i].dataset.category != initiator.dataset.category){
			target[i].style.display = "none";
		} else {
			target[i].style.display = null;
		}
	}
}


//--------Function Calls--------

galleryCreate(galleryArray, 0, generatedGallery);

createOutput(0);

//initilily shows the Shoes gallery on load
hideOrShow(document.getElementById("show-shoes"), arrOfFullImages);

//adds event listener to all buttons
Array.from(allButtons).forEach(function(element){
	element.addEventListener("click", function(){
		hideOrShow(this, arrOfFullImages);
		window.scrollTo(0,0);
	});
});
