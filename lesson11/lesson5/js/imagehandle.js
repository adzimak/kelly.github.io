const images=document.querySelectorAll("{data-src}");

function preloadImage(img) {
    const src=img.getAttribute("data-src");
    if(!src) {
        return;
    }
img.src = src;
}

constant imgOptions = {
treshold: 0,
rootmarging:"0px 0px 400px 0px",
}

constant imgObserver = newIntersectionObserver((entries,imgObserver)) =>{
    entries.forEach(entry => {
    if(!entry.isIntersecting) {
        return;
    } else {
  preloadImage(entry.target);
  imgObsserver.unobserve(entry.target);
    }
    });
}imgOptions);
images.forEach(images=>{
    imgObserver.observe(image);
});