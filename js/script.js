//ini kode js
console.log('Javascript On')

let indexSlide = 0;
let indexTestimonial = 0;

nextSlide();
setInterval(nextSlide, 3000);


nextTestimonial();
setInterval(nextTestimonial, 3000);

function validateForm(){
    const usernameInput = document.getElementById('username-input').value;
    const emailInput = document.getElementById('email-input').value;
    console.log(usernameInput);

    //Validasi Username
    if (usernameInput == '') {
        alert('Please fill username');
    } else if (emailInput == '') {
        alert('Please fill email');
    }
    else {
        document.getElementById('username-result').innerHTML = usernameInput;
    }

    console.log('validateForm executed')
}


function nextSlide (){
    showBanner(indexSlide += 1);
}

function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');

    console.log(imageList);
    console.log(imageList.length);
    console.log(n);

    if (n > imageList.length - 1) indexSlide = 0;
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    imageList[indexSlide].style.display = "block";
}


function nextTestimonial() {
    showTestimonial(indexTestimonial += 1);
}

function showTestimonial(n) {
    const testimonialList = document.getElementsByClassName('testimonial-item');

    if (n > testimonialList.length - 1) indexTestimonial = 0;

    for (let i = 0; i < testimonialList.length; i++) {
        testimonialList[i].style.display = "none";
    }

    testimonialList[indexTestimonial].style.display = "block";
}
