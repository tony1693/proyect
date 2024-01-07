const container = document.getElementById(`contenedor`);
const container2 = document.getElementById(`contenedor2`);

class Movie {
    constructor(id,title,photo){
        this.id = id;
        this.title = title;
        this.photo = photo;
    }
}
class Professional{
    constructor(id,profession,name,age,photo) {
        this.id = id;
        this.profession = profession;
        this.name = name;
        this.age = age;
        this.photo = photo;
    }
}

const database = [
    new Movie(1,"Avatar 2", "avatar2.jpg"),
    new Movie(2,"Fast and Furious X", "Fast_FuriousX.jpg"),
    new Movie(3,"Training Day", "Training_Day.jpg"),
    new Movie(4,"Soy Leyenda", "soyLeyenda.jpg"),
    new Movie(5,"The Warriors", "warriors.webp"),
    new Movie(6,"Como Dios", "comoDios.webp"),
    new Movie(7,"2 Tontos muy Tontos", "Dos_tontos.jpg"),
    new Movie(8,"Garra", "garra.webp"),
    new Movie(9,"Saw IV", "saw.jpg"),
    new Movie(10,"Celda 211", "celda.jpg"),
    new Movie(11,"Ocho Apellidos Vascos", "ocho.webp"),
    new Movie(12,"Tengo Ganas De Ti", "tengoGanasDeTi.jpg"),
]
const database2 = [
    new Professional(1,"Actor","Mario Casas",37,"marioCasas.jpeg"),
    new Professional(2,"Actor","Jym Carrey",61,"JIM-CARREY.jpg"),
    new Professional(3,"Actor","Jenifer Aniston",54,"jeni.webp"),
    new Professional(4,"Actor","Vin Diesel",56,"vinDiesel.jpg"),
    new Professional(5,"Actor","Luis Tosar",52,"luis.jpeg"),
    new Professional(6,"Actor","Denzel Washington",69,"Denzel.webp"),
    new Professional(7,"Actor","Clara Lago",33,"clara.webp"),
    new Professional(8,"Actor","Adam Sandler",57,"adam.webp"),
    new Professional(9,"Actor","Juancho Hernangomez",28,"juancho.jpg"),
    new Professional(9,"Actor","Daniel Rovira",28,"dani.jpeg"),
    new Professional(9,"Actor","Carmen Machi",60,"carmen.jpg"),
    new Professional(9,"Actor","Karra Elejalde",63,"karra.jpg"),

]
function insertMovie() {
    let htmlMovie =``;
    database.forEach(movie => {
        const card = `
        <div class="card"id="${movie.id}" style="width: 18rem;">
            <img src="${movie.photo}"style="position: relative;right: 12px;width: 286px;height: 240px;object-fit:cover" class="card-img-top" alt=""${movie.photo}"">
            <p class="card-text"style="width: 286px;position: relative;right: 12px;">"${movie.title}"</p>
        </div>`
        htmlMovie += card;
    })
    container.innerHTML = htmlMovie;
}

function insertProfession() {
    let htmlProfe = ``;
    database2.forEach(professional => {
        const card = `
        <div class="card"id="${professional.id}" style="width: 18rem;">
            <img src="${professional.photo}"style="position: relative;right: 12px;width: 286px;height: 240px;object-fit:cover" class="card-img-top" alt=""${professional.photo}"">
            <p class="card-text"style="width: 286px;position: relative;right: 12px;">"${professional.name}"</p>
        </div>`
        htmlProfe += card;
    })
    container2.innerHTML = htmlProfe;
}

function uploadContent(){
    insertMovie();
    insertProfession();
    loadLocalStorage();

}

const info = [];

function saveInfo(){
        const title = document.getElementById("titulo").value;
        const genere = document.getElementById("genero").value;
        const date = document.getElementById("fecha").value;
    const movieInfo = {
        title: title,
        genere: genere,
        date: date 
    }
        info.push(movieInfo);
        displayMovie(info);
}
const infoList = document.getElementById("listaDestin");

function displayMovie(info) {
    clearList()
    info.forEach(movie => {
        const newMovie = document.createElement(`li`);
        newMovie.textContent = `Titulo: ${movie.title} - Genero: ${movie.genere} - Fecha-Extreno: ${movie.date}`;
        infoList.appendChild(newMovie);
    })
}

function buttonEnter(){
    saveInfo();
    saveLocalStorage();

}
function clearList(){
    infoList.innerHTML = ``;
}

function saveLocalStorage() {
    localStorage.setItem("listaDestin", JSON.stringify(info));
}

function loadLocalStorage() {
    const loadInfo = localStorage.getItem('listaDestin');
    if (loadInfo) {
        newMovie = JSON.parse(loadInfo);
        displayMovie(newMovie);
    }
}

