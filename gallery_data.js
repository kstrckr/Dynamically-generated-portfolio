let imageList = [];

let generateImageList = (x) => {
	
	imageList.unshift(x);
	x--;
	if (x === 0){
		return;
	};
	
	generateImageList(x)
};



const galleryArray = [
	
	"066243_7.jpg",
	"142949_5.jpg",
	"19A2E29_6.jpg",
	"232730_18.jpg",
	"3A4954_13.jpg",
	"46130A_12.jpg",
	"4B332E_20.jpg",
	"4B362B_22.jpg",
	"4E555A_17.jpg",
	"56191B_8.jpg",
	"673D19_14.jpg",
	"6C4124_6.jpg",
	"757980_19.jpg",
	"757EA9_1.jpg",
	"868C91_10.jpg",
	"9A9AA2_21.jpg",
	"A35037_4.jpg",
	"A36D27_15.jpg",
	"CFC59B_11.jpg",
	"EE001C_24.jpg",
	"EEDAB7_23.jpg",
	"F3C594_2.jpg",
	"F4534C_3.jpg",
	"F99338_9.jpg"

	
];