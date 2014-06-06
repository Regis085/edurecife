
function slide1() {
    document.getElementById('img-banner').src = "imagens/banner/recife-antigo.jpg";
    setTimeout("slide2()", 3000)
}

function slide2() {
    document.getElementById('img-banner').src = "imagens/banner/praia-boaviagem.jpg";
    setTimeout("slide3()", 3000)
}

function slide3() {
    document.getElementById('img-banner').src = "imagens/banner/rio-capibaribe.jpg";
    setTimeout("slide1()", 3000)
}
