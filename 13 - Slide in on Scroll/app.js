function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const allImages = document.querySelectorAll('.slide-in');

function imagesAppear() {
  allImages.forEach(image => {
    const windowBottom = window.scrollY + window.innerHeight;
    const imageMiddle = image.offsetHeight / 2;
    const imageBottom = image.offsetTop + image.offsetHeight;

    const imageHalfVisible = windowBottom >= image.offsetTop + imageMiddle;
    const imageNotScrolledPast = window.scrollY < imageBottom

    if (imageHalfVisible && imageNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');    
    }
  });
}

window.addEventListener('scroll', debounce(imagesAppear));