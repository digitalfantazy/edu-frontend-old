function checkFunction() {
  var checkbox1 = document.getElementById("1");
  var checkbox2 = document.getElementById("2");
  var checkbox3 = document.getElementById("3");
  var submitButton = document.getElementById("submitButton");
  var image=document.getElementById("image");
  var imgs=new Array('../assets/interactive/1-image.png', '../assets/interactive/2-image.png', '../assets/interactive/3-image.png', '../assets/interactive/4-image.png');

  if (checkbox1.checked && checkbox2.checked) {
      checkbox3.disabled = false;
      image.src=imgs[2];
  } else if (checkbox1.checked) {
      checkbox2.disabled = false;
      checkbox3.disabled = true;
      image.src=imgs[1];
  } else if (checkbox1.checked === false) {
      checkbox2.disabled = true;
      checkbox3.disabled = true;
  } 
  if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
    submitButton.disabled = false;
    image.src=imgs[3];
  }
}

function checkFunction1() {
  var checkbox4 = document.getElementById("4");
  var submitButton = document.getElementById("submitButton");
  var image=document.getElementById("image");
  if (checkbox4.checked) {
    submitButton.disabled = false;
    image.src=imgs[0];
  }
}


function checkFunction2() {
  var checkbox5 = document.getElementById("5");
  var checkbox6 = document.getElementById("6");
  var submitButton = document.getElementById("submitButton");
  var image=document.getElementById("image");
  var imgs=new Array('../assets/interactive/7-image.png');

  if (checkbox5.checked) {
      checkbox6.disabled = false;
      image.src=imgs[0];
  } else if (checkbox5.checked === false) {
    checkbox6.disabled = true;
  }
  if (checkbox5.checked && checkbox6.checked) {
    submitButton.disabled = false;
  }
  
}


function checkFunction3() {
  var checkbox7 = document.getElementById("7");
  var checkbox71 = document.getElementById("71");
  var checkbox72 = document.getElementById("72");
  var checkbox73 = document.getElementById("73");
  var checkbox74 = document.getElementById("74");
  var submitButton = document.getElementById("submitButton");
  var image=document.getElementById("image");
  var imgs=new Array('../assets/interactive/9-image.png', '../assets/interactive/10-image.png', '../assets/interactive/11-image.png', '../assets/interactive/4-image.png');

  if (checkbox71.checked) {
    checkbox72.disabled = false;
    checkbox73.disabled = true;
    checkbox74.disabled = true;
    image.src=imgs[0];
  } if (checkbox71.checked && checkbox72.checked) {
      checkbox73.disabled = false;
      checkbox74.disabled = true;
      image.src=imgs[1];
  } if (checkbox71.checked && checkbox72.checked && checkbox73.checked) {
      checkbox74.disabled = false;
      image.src=imgs[2];
  }  
  if (checkbox71.checked && checkbox72.checked && checkbox73.checked && checkbox74.checked) {
    checkbox7.checked = true;
    submitButton.disabled = false;
    image.src=imgs[3];
  }
}














