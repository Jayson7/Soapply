window.addEventListener("load", () => {
    var toggle = document.querySelector(".toggle i");
    var mainbody = document.querySelector(".mainbody");
    toggle.addEventListener("click", () => {
        setTimeout(() => {
            mainbody.classList.toggle("mainbody-active")


        }, 400);
    })
})


$('.owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,

    responsiveClass: true,
    autoplay: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,


        }
    }
})