document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".video-slide");
    const nextButton = document.getElementById("next-video-slide");
    let currentSlide = 0;

    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        const video = slides[currentSlide].querySelector("video");
        video.play();
        console.log(video.duration)
    }

    nextButton.addEventListener("click", nextSlide);

    showSlide(currentSlide);
    const video = slides[currentSlide].querySelector("video");
    video.play();


    
    
});

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

let vid = document.getElementById("video_slider");
vid.onended = function() {
    var videoHeader = vid.nextElementSibling.getElementsByTagName("h3")[0].innerText
    Array.from(document.getElementsByClassName("collection-item")).forEach(
        function(div, index, array) {
            data = div.getElementsByTagName("h3");
            if (videoHeader == data.dataset.dataset.header) {
                if (index != (array.length - 1)) {
                    videoUrl(div.nextElementSibling.getElementsByTagName("h3")[0])
                } else {
                    videoUrl(array[0].getElementsByTagName("h3")[0])
                }
            }
        }
    );
};