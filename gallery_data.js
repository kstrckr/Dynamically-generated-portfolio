// let imageList = [];

/* 
let generateImageList = (x) => {
	
	imageList.unshift(x);
	x--;
	if (x === 0){
		return;
	};
	
	generateImageList(x)
};
*/


const galleryArray = [
	"066243_07.jpg",
	"142949_05.jpg",
	"19A2E2_16.jpg",
	"232730_18.jpg",
	"3A4954_13.jpg",
	"46130A_12.jpg",
	"4B332E_20.jpg",
	"4B362B_22.jpg",
	"4E555A_17.jpg",
	"56191B_08.jpg",
	"673D19_14.jpg",
	"6C4124_06.jpg",
	"757980_19.jpg",
	"757EA9_01.jpg",
	"868C91_10.jpg",
	"9A9AA2_21.jpg",
	"A35037_04.jpg",
	"A36D27_15.jpg",
	"CFC59B_11.jpg",
	"EE001C_24.jpg",
	"EEDAB7_23.jpg",
	"F3C594_02.jpg",
	"F4534C_03.jpg",
	"F99338_09.jpg"
];

const galleryObj =[
	  	{ 	color: "#066243", 
		 	name: "066243_07.jpg"},
		{ 	color: "#142949", 
		 	name: "142949_05.jpg"},
		{ 	color: "#19A2E2", 
		 	name: "19A2E2_16.jpg"},
		{ 	color: "#232730", 
		 	name: "232730_18.jpg"},
		{ 	color: "#3A4954", 
		 	name: "3A4954_13.jpg"},
		{ 	color: "#46130A", 
		 	name: "46130A_12.jpg"},
		{ 	color: "#4B332E", 
		 	name: "4B332E_20.jpg"},
		{ 	color: "#4B362B", 
		 	name: "4B362B_22.jpg"},
		{ 	color: "#4E555A", 
		 	name: "4E555A_17.jpg"},
		{ 	color: "#56191B", 
		 	name: "56191B_08.jpg"},
		{ 	color: "#673D19", 
		 	name: "673D19_14.jpg"},
		{ 	color: "#6C4124", 
		 	name: "6C4124_06.jpg"},
		{ 	color: "#757980", 
		 	name: "757980_19.jpg"},
		{ 	color: "#757EA9", 
		 	name: "757EA9_01.jpg"},
		{ 	color: "#868C91", 
		 	name: "868C91_10.jpg"},
		{ 	color: "#9A9AA2", 
		 	name: "9A9AA2_21.jpg"},
		{ 	color: "#A35037", 
		 	name: "A35037_04.jpg"},
		{ 	color: "#A36D27", 
		 	name: "A36D27_15.jpg"},
		{ 	color: "#CFC59B", 
		 	name: "CFC59B_11.jpg"},
		{ 	color: "#EE001C", 
		 	name: "EE001C_24.jpg"},
		{ 	color: "#EEDAB7", 
		 	name: "EEDAB7_23.jpg"},
		{ 	color: "#F3C594", 
		 	name: "F3C594_02.jpg"},
		{ 	color: "#F4534C", 
		 	name: "F4534C_03.jpg"},
		{ 	color: "#F99338", 
		 	name: "F99338_09.jpg"} ]

console.log(galleryObj[4].name)

/*

function printGalleryObj(array){
	
	for(let i = 0; i<array.length; i++){
		
		galleryObj[i] = "{ color: #" + array[i].substr(0,6) + ", name: " + array[i] + "}"
	}
	
	console.log(galleryObj);
};

printGalleryObj(galleryArray);

*/