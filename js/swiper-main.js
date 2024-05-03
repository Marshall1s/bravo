document.addEventListener("DOMContentLoaded", function() {
    const windowWidth = window.innerWidth;
    const direction = (windowWidth >= 1000) ? "horizontal" : "vertical";
    const slidesPerView = (windowWidth >= 1000) ? 4 : 3;
    const dragSize = (windowWidth >= 1000) ? "200" : "50";
    
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
            draggable: false,
            horizontalClass: "scrollbar_custom",
            verticalClass: "scrollbar_custom",
            // hide: "true"
            dragSize: dragSize
        },
    });

    // const swiperProjects = 
    const swiperSlides = document.querySelectorAll("#dataset")
    $(".swiper-slide").click(function(e){
        swiperSlides.forEach((slide, i) => {
            if (e.target.dataset.header === slide.dataset.header) {
                e.target.style.color = "rgb(221, 15, 15)";
            } else {
                slide.style.color = "rgb(255, 255, 255)";
            }
        });
        if (windowWidth >= 1000) {
            swiper.slideNext();
        }
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