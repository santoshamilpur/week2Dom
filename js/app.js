function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    var arr=document.getElementsByTagName("p");
    for(var x=0;x<arr.length;x++){
        arr[x].innerHTML = "hi"
    }
}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor = "blue";
}

function increaseFont() {
    document.getElementById("block2").style.fontSize = "xx-large";
}

function changeFontColor() {
    document.getElementById("block3").addEventListener("mouseover", mouseOver);
document.getElementById("block3").addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.getElementById("block3").style.color = "green";
}

function mouseOut() {
    document.getElementById("block3").style.color = "black";
}

}

function revertColor() {

}

function hide(block4) {
    
    var e = document.getElementById("block4")
    e.style.display = 'none';

}

function changeBackColor1(color,box1) {
    var y = document.getElementsByClassName("box1");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = color;
    }
}
function changeBackColor(color,box2) {
    var y = document.getElementsByClassName("box2");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = color;
    }
}


function addAdjacent(para2,Text) {
    var elem = document.getElementById(para2);
        elem.innerHTML += Text;
}

function removePara() {

}

function animatePara() {

}
