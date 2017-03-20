const generatedGallery = [];

//creates an array of objects, each of which holds the .color and .name (hex color and file name)
let galleryCreate = (array, index, output) => {
	let tempObj = {};
  	tempObj.color = "#"+array[index].substr(0,6);
	tempObj.name = array[index];
	tempObj.category = array[index].substr(-5,1)
	output.push(tempObj);

	if (index === array.length-1){
    console.log(output);
		return;
	}

	galleryCreate(array, index+1, output)
};


let createOutput = (i) => {
	//targets the output div that already exists in index.html
	let target = document.getElementById("output");

	//this section generates the divs that will be nested to create each gallery image
	let bgDiv = document.createElement("div");

	let numberHolder = document.createElement("div");

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

	//dynamically creates the h3 content
	numberHolder.innerHTML = "<h3>" + (i+1) + "/" + generatedGallery.length + "</h3>"

	//this section sets up the class names for styling w/ style.css
	bgDiv.className = "full-shot";
	bgDiv.dataset.category = generatedGallery[i].category;

	numberHolder.className = "number";

	imageHolder.className = "image-holder";

	newPhoto.className = "image-main";

	//this section nests the divs in the proper order to create each gallery image w/ background and number
	bgDiv.appendChild(numberHolder);
	bgDiv.appendChild(imageHolder);
	imageHolder.appendChild(newPhoto);

	//appends the completed bgDiv to the output class in index.html
	target.appendChild(bgDiv);

	//exits the recursive createOutput function at end of galleryArray
	if (i === generatedGallery.length-1){
		//alert(imgUrl);
		return;
	};

	//recurisve counter and call
	i++

	createOutput(i);
};

//mainInput.addEventListener("click", clickEvent);

galleryCreate(galleryArray, 0, generatedGallery);

console.log(generatedGallery);

createOutput(0);

let arrOfFullImages = document.getElementsByClassName("full-shot");

let hideOrShow = (initiator, target) => {
	for(let i = 0; i < target.length; i++){
		if(target[i].dataset.category != initiator.dataset.category){
			target[i].style.display = "none";
		} else {
			target[i].style.display = null;
		}
	}
}

let allButtons = document.getElementsByClassName("gallery-select");

hideOrShow(document.getElementById("show-shoes"), arrOfFullImages);

Array.from(allButtons).forEach(function(element){
	element.addEventListener("click", function(){
		let buttonPressed = this;
		hideOrShow(buttonPressed, arrOfFullImages);
		window.scrollTo(0,0);
	});
});