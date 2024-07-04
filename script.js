let scrolContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Thease line of code effect for mouse 
scrolContainer.addEventListener("wheel", (e)=> {
    e.preventDefault();
    scrolContainer.scrollLeft += e.deltaY;
    scrolContainer.style.scrollBehavior = "auto";

});

// Thease line of code scrol the gallery
nextBtn.addEventListener("click", ()=> {
    scrolContainer.style.scrollBehavior = "smooth";
    scrolContainer.scrollLeft += 900;
});

// Thease line of code scrol the gallery
backBtn.addEventListener("click", ()=> {
    scrolContainer.style.scrollBehavior = "smooth";
    scrolContainer.scrollLeft -= 900;
});