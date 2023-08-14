// Get reference to the image container and the change button
const imageContainer = document.getElementById("imageContainer");
const changeButton = document.getElementById("changeButton");

// Define an array of image objects
const images = [
    { src: "https://pngimg.com/uploads/captain_america/captain_america_PNG76.png", alt: "Image 1" },
    { src: "https://i.postimg.cc/Kz4LjN9P/super.png", alt: "Image 2" },
    { src: "https://4.bp.blogspot.com/-NT1uKQgh-Ho/XILQ4tCnb-I/AAAAAAAAJBI/Vc2gKJ2-200bNt85F5IBJIvEbZpTm_r6ACLcBGAs/s1600/Batman%2B1.png", alt: "Image 3" },
    { src: "https://pngimg.com/uploads/spider_man/spider_man_PNG25.png", alt: "Image 4" },
    { src: "https://vignette.wikia.nocookie.net/vsbattles/images/8/85/Kent_Nelson_Render.png/revision/latest?cb=20180713151600", alt: "Image 5" },
    { src: "https://www.pinclipart.com/picdir/big/98-981513_stephen-vincent-strange-doctor-strange-ultimate-marvel-vs.png", alt: "Image 6" },
    { src: "http://clipart-library.com/images_k/wonder-woman-transparent/wonder-woman-transparent-18.png", alt: "Image 7" },
    { src: "https://blog.sqlauthority.com/i/b/ironman.png", alt: "Image 8" },
    { src: "https://vignette.wikia.nocookie.net/vsbattles/images/9/9a/QDNpnla.png/revision/latest?cb=20160511135042", alt: "Image 9" },
    
];

// Display the first image initially
let currentImageIndex = 0;
imageContainer.innerHTML = `<img src="${images[currentImageIndex].src}" alt="${images[currentImageIndex].alt}">`;

// Function to change the displayed image
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageContainer.innerHTML = `<img src="${images[currentImageIndex].src}" alt="${images[currentImageIndex].alt}">`;
}

// Attach the changeImage function to the button's click event
changeButton.addEventListener("click", changeImage);