function aparecer1(){
    document.getElementById("cat").style.top = "-100px";
}
function aparecer2(){
    document.getElementById("heartmini").style.zIndex = "2";
    document.getElementById("textimg1").innerText = "Você acelera meu coração";
}
function aparecer3(){
    document.getElementById("foto3").style.backgroundImage = "url('fotos/ghibli.jpg')";
}
function aparecer4(){
    document.getElementById("textimg").innerText = "Eu Te Amooooo Mulher!!!!😍❤❤";
    document.getElementById("textimg").style.fontSize = '20px';
}
function aparecer5(){
    document.getElementById("rosa1").style.left= '155px';
    document.getElementById("rosa2").style.left= '-100px';
    document.getElementById("rosa3").style.left= '160px';
    document.getElementById("rosa3").style.top= '150px';
    document.getElementById("rosa4").style.left= '-100px';
    document.getElementById("rosa4").style.top= '150px';
}

function openGift(){
    document.getElementById("gift").style.display = "none";
    document.getElementById("open").style.display = "flex";
}
function openMain(){
    document.getElementById("main").style.display = "flex";
    document.getElementById("open").style.display = "none";
}
function love(){
    document.getElementById("love").style.display = "flex";
    document.getElementById("main").style.display = "none";
}

//returns
function returngift(){
    document.getElementById("gift").style.display = "flex";
    document.getElementById("open").style.display = "none";
}
function returnopenMain(){
    document.getElementById("main").style.display = "none";
    document.getElementById("open").style.display = "flex";
}
function returnlove(){
    document.getElementById("love").style.display = "none";
    document.getElementById("main").style.display = "flex";
}