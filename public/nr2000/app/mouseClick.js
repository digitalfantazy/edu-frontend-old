function nextPage(target){
    window.location.href= `./${target}`;
}

function closeWindow() {
    window.close();
}


var pastries = document.getElementById('pastries');

pastries.addEventListener("click", function( event ) {
    console.log(pastries)
    const dataTarget = event.target.getAttribute('data-target');
    const textInfo = document.getElementById('textInfo');
    const innerTexts = textInfo.getElementsByClassName('innerText');

    for (let i = 0; i < innerTexts.length; i++) {
        if (innerTexts[i].getAttribute('data-index') !== dataTarget) {
            innerTexts[i].style.display = 'none';
        }
    }

    const targetText = textInfo.querySelector('[data-index="' + dataTarget + '"]');
    if (targetText) {
        targetText.style.display = 'block';
    }
});