var ulDropper = document.querySelector("nav ul li:nth-child(1)");
var dropdowns = document.querySelector("nav ul li ul")
ulDropper.addEventListener("mouseover", () => {
    dropdowns.style.display = "block";
})
ulDropper.addEventListener("mouseout", () => {
    dropdowns.style.display = "none";
})
window.addEventListener("load", function() {
    var nav = document.querySelector(".nav");
    var nav_active = document.querySelectorAll(".nav-active");
    var toggles = document.querySelector(".bar");

    var ol = document.querySelector("ol");


    toggles.addEventListener("click", function() {
        nav.classList.toggle("nav-active")

        setTimeout(() => {
            ol.classList.toggle("uls")
        }, 100);

    })

})