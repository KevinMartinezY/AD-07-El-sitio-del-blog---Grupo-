let img=document.getElementById("img");
const BTN=document.getElementById("random");
let photo;

async function getPhoto() {
    const respuesta = await fetch("https://api.thecatapi.com/v1/images/search");
    const datos = await respuesta.json();
    img.src = datos[0].url;
    console.log(img.src);
}


BTN.onclick = function() {
    getPhoto();
}
