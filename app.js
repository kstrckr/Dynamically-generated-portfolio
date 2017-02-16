let mainInput = document.getElementById("input01");

//let clickEvent = () => {alert("Arrow working")};

let color = "gray";

let imageList = [];

let generateImageList = (x) => {
	
	imageList.unshift(x);
	x--;
	if (x === 0){
		return;
	};
	
	generateImageList(x)
};

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
	
	let newPhoto = document.createElement("img");
	
	let imgUrl = "imgs/" + imageList[i] + ".jpg";
		
	newPhoto.setAttribute("src", imgUrl);
	
	newPhoto.className = "gallery-img";
		
	target.appendChild(newPhoto);
	
	if (i === imageList.length-1){
		//alert(imgUrl);
		return;
	};
	
	i++
	
	createOutput(i);
};


mainInput.addEventListener("click", clickEvent);

createOutput(0);


