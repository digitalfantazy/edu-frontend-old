document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() { return false; }

function nextPage(target){
    window.location.href= `./${target}`;
}

