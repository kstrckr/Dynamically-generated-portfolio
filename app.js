let mainInput = document.getElementById("input01");

//let clickEvent = () => {alert("Arrow working")};

let color = "gray";

generateImageList(24);

let clickEvent = () => {
	let elt = document.getElementsByTagName("body");
	
	if (elt[0].style.background === color){
		elt[0].style.background = "white"
	} else{
	elt[0].style.background = color;
	};
}


let createOutput = (i) => {
	
	let target = document.getElementById("output");
	
	let bgDiv = document.createElement("div");
	
	let numberHolder = document.createElement("div");
	
	let imageHolder = document.createElement("div");
	
	let newPhoto = document.createElement("img");
	
	let imgUrl = "imgs/" + galleryArray[i];
	
	let bgColor = "#" + galleryArray[i].substr(0,6);
		
	newPhoto.setAttribute("src", imgUrl);
	
	
	
	newPhoto.className = "gallery-img";
		
	target.appendChild(newPhoto);
	
	if (i === galleryArray.length-1){
		//alert(imgUrl);
		return;
	};
	
	i++
	
	createOutput(i);
};


mainInput.addEventListener("click", clickEvent);

createOutput(0);

