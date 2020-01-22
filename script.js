const photos = [
    "assets/gallery/gallery-1.jpg",
    "assets/gallery/gallery-2.jpg",
    "assets/gallery/gallery-3.png",
    "assets/gallery/gallery-4.png",
    "assets/gallery/gallery-5.jpg",
    "assets/gallery/gallery-6.jpg"
]

let imageLeft;
let imageCenter;
let imageRight;

let currentID = 0;

window.onload = function () {

    imageLeft = document.getElementById('image-left');
    imageCenter = document.getElementById('image-center');
    imageRight = document.getElementById('image-right');


    imageCenter.src = photos[0];
    imageLeft.src = photos[photos.length - 1];
    imageRight.src = photos[1];


}

function forwardImage() {
    currentID++;


    if (currentID > photos.length - 1) {
        currentID = 0;
    }

    assignImages();
}

function backwardImage() {
    currentID--;

    if (currentID < 0) {
        currentID = photos.length - 1;
    }

    assignImages();

}

function assignImages() {

    let previousID = currentID - 1;
    if (previousID < 0) {
        previousID = photos.length - 1;
    }

    let nextID = currentID + 1;
    if (nextID > photos.length - 1) {
        nextID = 0;
    }


    imageLeft.src = photos[previousID];
    imageCenter.src = photos[currentID];
    imageRight.src = photos[nextID];

    restartAnimations();
}

function restartAnimations() {
    const element1 = imageLeft.parentElement;
    element1.classList.remove("gallery-entry-animation");
    void element1.offsetWidth;
    element1.classList.add("gallery-entry-animation");

    const element2 = imageCenter.parentElement;
    element2.classList.remove("gallery-entry-animation");
    void element2.offsetWidth;
    element2.classList.add("gallery-entry-animation");

    const element3 = imageRight.parentElement;
    element3.classList.remove("gallery-entry-animation");
    void element3.offsetWidth;
    element3.classList.add("gallery-entry-animation");
    
}