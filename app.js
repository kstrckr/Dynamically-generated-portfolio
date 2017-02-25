const generatedGallery = [];

//creates an array of objects, each of which holds the .color and .name (hex color and file name)
let galleryCreate = (array, index, output) => {
	let tempObj = {};
  	tempObj.color = "#"+array[index].substr(0,6);
	tempObj.name = array[index];
	generatedGallery.push(tempObj);

	if (index === array.length-1){
    console.log(output);
		return;
	}

	galleryCreate(array, index+1, generatedGallery);
};

//sorts galleryArray by file number (01, 02, 03, etc) so I don't have to re-order the images manually when adding new shots
let sortObj = (inputArray) => {

	inputArray.sort(function(a, b){

	if(a.name.substr(-6,2) < b.name.substr(-6,2)) return -1;
	if(a.name.substr(-6,2) > b.name.substr(-6,2)) return 1;
	return 0;

	});
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

sortObj(generatedGallery);

createOutput(0);