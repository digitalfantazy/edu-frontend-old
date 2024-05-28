function nextPage(target){
    window.location.href= `./${target}`;
}

function closeWindow() {
    window.close();
}

function Draw(x, y){

    var img = document.getElementById("theImg");
    var cnvs = document.getElementById("myCanvas");
    
    cnvs.style.position = "absolute";
    cnvs.style.left = img.offsetLeft + "px";
    cnvs.style.top = img.offsetTop + "px";
    
    var ctx = cnvs.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#484282';
    ctx.stroke();
}

function Clear(){

    var cnvs = document.getElementById("myCanvas");

    var ctx = cnvs.getContext("2d");
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);
}