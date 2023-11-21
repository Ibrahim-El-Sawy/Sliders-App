// Get Slider Items by Array from
var imageSlider = Array.from(document.querySelectorAll(".imag img"))
console.log(imageSlider)


// Get Numbers of Sliders
var sliderCount = imageSlider.length

// Set Current Slide 
var currentSlide = 1;

// Slide Number Element 
var slideNumberElement = document.getElementById("slider-number")

// Back and Next Buttons
var backButton = document.getElementById("back")
var nextButton = document.getElementById("next")

// Create The main UL Element
var UlElement = document.createElement("ul")
UlElement.setAttribute("id", "ul-Element")
for (var i = 1; i <= sliderCount; i++) {
    var item = document.createElement("li")
    item.setAttribute("data-index", i)
    var number_li = document.createTextNode(`${i}`)
    item.appendChild(number_li)
    UlElement.appendChild(item)
}

// Display Ul List in Main Page
var Indinctors = document.getElementById("indicators");
Indinctors.appendChild(UlElement)

// Get List Items by Array from
var listNumber = Array.from(document.querySelectorAll("#ul-Element li"))

// loop through all list items
for (var i = 0; i < listNumber.length; i++) {
    listNumber[i].onclick = function() {

        currentSlide = parseInt(this.getAttribute("data-index"));
        theCheck();

    }
}

// Get The New Created Ul
var pagCreatedUl = document.getElementById("ul-Element")
console.log(pagCreatedUl)

theCheck()

// next and back functions
function nextSlid() {
    if (nextButton.classList.contains("disabled")) {

    } else {
        currentSlide++;
        theCheck();
    }
}

function backSlid() {
    if (backButton.classList.contains("disabled")) {

    } else {
        currentSlide--;
        theCheck();
    }
}
nextButton.onclick = nextSlid;
backButton.onclick = backSlid;

// Create The Checker Function
function theCheck() {



    // Set The Slide Number
    slideNumberElement.textContent = "#" + currentSlide + " of " + sliderCount;

    // Remove All Classes Active
    removeAllActive()

    // Set Active Class On Current Slide 
    imageSlider[currentSlide - 1].classList.add("active")

    // Set Active Class On Current List 
    pagCreatedUl.children[currentSlide - 1].classList.add("active")

    // check if current slide is the first
    if (currentSlide == 1) {

        // add disabled class on back button
        backButton.classList.add("disabled")

    } else {

        // remove disabled class on back button
        backButton.classList.remove("disabled")

    }

    // check if current slide is the first
    if (currentSlide == sliderCount) {

        // add disabled class on next button
        nextButton.classList.add("disabled")

    } else {

        // remove disabled class on next button
        nextButton.classList.remove("disabled")

    }
}


// Remove All Active classes From Images and pagination Bullets
function removeAllActive() {
    // loop throgh images
    imageSlider.forEach(img => {
        img.classList.remove("active")
    });

    listNumber.forEach(li => {
        li.classList.remove("active")
    });

}