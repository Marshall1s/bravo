const windowGap = 800;
const windowWidth = window.innerWidth;
const slidesPerViewProjects = (windowWidth >= windowGap) ? 4 : 2;


const swiperProjects = new Swiper('.swiper-projects-container', {
    // Optional parameters
    direction: "vertical",
    loop: false,
    slidesPerView: slidesPerViewProjects,
    watchOverflow: 'false',
    speed: "600",
    // initialSlide: 1,
    mousewheel: true,
    navigation: {
        nextEl: '.slider-control-next',
        prevEl: '.slider-control-prev',
      },
});

document.addEventListener("DOMContentLoaded", function() {
    // const windowWidth = window.innerWidth;
    const direction = (windowWidth >= windowGap) ? "horizontal" : "vertical";
    const slidesPerView = (windowWidth >= windowGap) ? 4 : 3;
    const dragSize = (windowWidth >= windowGap) ? "200" : "50";
    
    const swiper = new Swiper('.swiper-top-container', {
        // Optional parameters
        direction: direction,
        loop: false,
        slidesPerView: slidesPerView,
        watchOverflow: 'true',
        speed: "600",
        initialSlide: 6,
        mousewheel: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            horizontalClass: "scrollbar_custom",
            verticalClass: "scrollbar_custom",
            // hide: "true"
            dragSize: dragSize
        },
    });

    const swiperSlides = document.querySelectorAll("#dataset")
    $(".swiper-slide").click(function(e){
        swiperSlides.forEach((slide, i) => {
            if (e.target.dataset.header === slide.dataset.header) {
                e.target.style.color = "rgb(221, 15, 15)";
            } else {
                slide.style.color = "rgb(255, 255, 255)";
            }
        });
        // if (windowWidth >= windowGap) {
        //     swiper.slideNext();
        // }
    });

   
    // document.querySelector(".slider-control-next").addEventListener('click', nextProjectSlide());

    
    // let currentIndex = 1;
    
    function changeSlide() {
        // const slidePosition = sliderContainer.querySelector(".swiper-slide-active").ariaLabel;
        // const totalSlides = slidePosition.split("/")[1].trim()
        // const currentPosition = slidePosition.split("/")[0].trim()
        // console.log(totalSlides + " " + currentIndex)
        // currentIndex = newIndex;
        // const newIndex = (index + totalSlides) % totalSlides;
        const sliderContainer = document.querySelector(".swiper-projects-container")
        const nextSlideDataset = sliderContainer.querySelector(".swiper-slide-active").dataset;
        const nextSlideDescr = document.querySelector(".swiper-projects-container").querySelector(".swiper-slide-active").querySelector(".swiper-projects-descr").innerHTML
        const sliderPlace = document.querySelector(".projects__slide")
        const slideStatus = sliderPlace.querySelector(".slide__status")
        const slideTitle = sliderPlace.querySelector(".slide__title-h")
        const slideGenre = sliderPlace.querySelector(".description-genre")
        const slideRoles =  sliderPlace.querySelector(".description-roles")
        const slideDescr = sliderPlace.querySelector(".overlay-text")
        const slideImg = sliderPlace.querySelector(".projects__slide-img")

        slideStatus.innerHTML = nextSlideDataset.status
        slideTitle.innerHTML = nextSlideDataset.header
        slideGenre.innerHTML = nextSlideDataset.genre
        slideRoles.innerHTML = nextSlideDataset.roles
        slideDescr.innerHTML = nextSlideDescr
        if (windowWidth > windowGap) {
            slideImg.style.backgroundImage = "url("+nextSlideDataset.pictureurlpc+")"; 
        } else {
            slideImg.style.backgroundImage = "url("+nextSlideDataset.pictureurl+")"; 
        }
    }

    var prevProjectSlideButton = document.querySelector(".slider-control-prev");
    var nextProjectSlideButton = document.querySelector(".slider-control-next");



    nextProjectSlideButton.addEventListener('click', function() {
        changeSlide();
    });
    prevProjectSlideButton.addEventListener('click', function() {
        changeSlide();
    });

    let vid = document.getElementById("video_slider");
    vid.onended = function() {
        var videoHeader = vid.nextElementSibling.getElementsByTagName("h3")[0].innerText
        Array.from(document.getElementsByClassName("swiper-top")).forEach(
            function(div, index, array) {
                data = div.getElementsByTagName("h3");
                if (videoHeader == data.dataset.dataset.header) {
                    if (index != (array.length - 1)) {
                        videoUrl(div.nextElementSibling.getElementsByTagName("h3")[0])
                        swiper.slideNext();
                    } else {
                        // videoUrl(array[0].getElementsByTagName("h3")[0])
                    }
                }
            }
        );
    };
})

function videoUrl(slide) {
    // document.getElementById("video_slider").src = slider;
    const videoSlide = document.getElementById("video_slider");
    // const sliderInfo = document.getElementById("video-info");
    const videoName = document.getElementById("video-header")
    const videoGenre = document.getElementById("video-genre")
    const videoRoles = document.getElementById("video-roles")
    
    videoName.innerHTML = slide.dataset.header
    videoGenre.innerHTML = slide.dataset.genre
    videoRoles.innerHTML = slide.dataset.roles
    if (slide.dataset.videourl == "none") {
 
        videoSlide.poster = slide.dataset.poster 

        videoSlide.autoplay = false
        videoSlide.controls = false
        videoSlide.src = slide.dataset.poster
    } else {
        videoSlide.src = slide.dataset.videourl
        videoSlide.autoplay = true
        videoSlide.controls = true
        videoSlide.poster = ""
    }
}

function changeSlideOnClick(e) {
    const nextSlideDescr = e.querySelector(".swiper-projects-descr").innerHTML
    const sliderPlace = document.querySelector(".projects__slide")
    const slideStatus = sliderPlace.querySelector(".slide__status")
    const slideTitle = sliderPlace.querySelector(".slide__title-h")
    const slideGenre = sliderPlace.querySelector(".description-genre")
    const slideRoles =  sliderPlace.querySelector(".description-roles")
    const slideDescr = sliderPlace.querySelector(".overlay-text")
    const slideImg = sliderPlace.querySelector(".projects__slide-img")

    slideStatus.innerHTML = e.dataset.status
    slideTitle.innerHTML = e.dataset.header
    slideGenre.innerHTML = e.dataset.genre
    slideRoles.innerHTML = e.dataset.roles
    slideDescr.innerHTML = nextSlideDescr
     
    if (windowWidth > windowGap) {
        slideImg.style.backgroundImage = "url("+e.dataset.pictureurlpc+")"; 
        slideImg.style.backgroundRepeat = "no-repeat";
    } else {
        slideImg.style.backgroundImage = "url("+e.dataset.pictureurl+")"; 
        slideImg.style.backgroundRepeat = "no-repeat";
    }
    var lastClicked = swiperProjects.clickedIndex
    swiperProjects.slideTo(lastClicked, 600, false)
}
