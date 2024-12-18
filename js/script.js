//ini kode js
console.log('Javascript On')

let indexSlide = 0;
nextSlide();


function validateForm(){
    const usernameInput = document.getElementById('name').value;
    console.log(usernameInput);

    //Validasi Username
    if (usernameInput == '') {
        alert('Please fill in the form');
    } else {
        document.getElementById('name-result').innerHTML = usernameInput;
    }

    console.log('validateForm executed')
}


function nextSlide (){
    showBanner(indexSlide +=1);
}

function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');
    console.log(imageList);
    console.log(imageList.length);
    console.log(n);

    if (n > imageList.length) indexSlide=0;
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    imageList[0].style.display = "block";
}
