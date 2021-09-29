class Anime {
    constructor(name1, gender, year) {
        this.name1 = name1,
            this.gender = gender,
            this.year = year;
    }
}

class UI {
    drawAnime(animesAgregados) {
        if (animesAgregados) {
            let animeList = $('#anime_list');
            this.cleanList();
            animesAgregados.forEach((anime, index) => {
                let element = document.createElement('div');
                element.id = index;
                element.innerHTML += `
            <div class="card">
                <div class="card_body">
                    <strong>Anime Name</strong>: ${anime.name1}
                    <strong>Anime Gender</strong>: ${anime.gender}
                    <strong>Anime Year</strong>: ${anime.year}
                </div>
            </div>`;
                let button = document.createElement('button');
                button.classList.add('btn');
                button.name = index;
                button.innerHTML = 'Delete';
                button.addEventListener('click', () => {
                    this.deleteAnime(index, animesAgregados);
                });
                $(element).append(button);
                $(animeList).append(element);
            });
        }
    }

    resetForm() { /*para resetear el form y se llama en los events*/
        document.getElementById('product_form').reset();
    }

    deleteAnime(index, animesAgregados) {
        let element = document.getElementById(index);
        element.parentElement.removeChild(element);
        animesAgregados.splice(index, 1);/*borra el primer elemento del indice, el numero es la cantidad */
        this.drawAnime(animesAgregados);
        guardarEnStorage('animes', animesAgregados);
    }

    cleanList() { /*removemos todos los hijos de un elemento, o sea limpiamos el animelist, sus elementos de adentro*/
        let element = document.getElementById("anime_list");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
};

let animes = []; /*arreglo de clases */
function guardarEnStorage(key, dato) {
    localStorage.setItem(key, JSON.stringify(dato))
}

function recuperarStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// ----- Eventos del DOM -----
let ui = new UI();
let listElements = recuperarStorage('animes');
ui.drawAnime(listElements);
document.getElementById('product_form')
    .addEventListener('submit', function (e) {
        e.preventDefault(); /*para que no refresque la pag de una */
        const nameInput = document.getElementById('name').value;
        const genderInput = document.getElementById('gender').value;
        const yearInput = document.getElementById('year').value;
        const anime1 = new Anime(nameInput, genderInput, yearInput);
        animes = recuperarStorage('animes') || []; /*el va a crear un [] si al recuperar storage devuelve null */
        animes.push(anime1);
        guardarEnStorage('animes', animes);
        console.log(animes)
        ui.drawAnime(animes);
        ui.resetForm(); /*resetea el form */
    });

function borrar(e) {
    const filtrados = animes.filter((item, index) => index != e.target.name)
    const ui = new UI();
    ui.drawAnime(filtrados);
    // ui.deleteAnime(e.target);
};

// ----- login -----
let register = document.getElementById('register');
let loginName = document.getElementById('loginName');
let elementP = document.getElementsByClassName('welcome');
const signIn = $("#signIn");

function login() {
    let p = document.getElementById('loginName');
    p.classList.add('welcome');
    p.innerHTML = "";
    p.innerHTML = `Welcome ${register.value}, good to see you here&nbsp;<i class="far fa-heart icon_heart"></i>!`;
    $("#signIn").slideUp("fast");
};


// ----- corazón y carita -----
$(document).ready(function () {
    function heartAnimation() {
        $(".icon_heart").removeClass("far fa-heart").addClass("far fa-smile-beam");
        setTimeout(function () {
            $(".icon_heart").removeClass("far fa-smile-beam").addClass("far fa-heart");
        }, 500)
    };
    setInterval(heartAnimation, 1000);
});

// ----- fetch -----
let animeQuotes = document.getElementById("anime_quotes");
const buttonAnime = document.getElementById("btn");

function getQuote() {
    fetch('animeQuotes.json') /*https://animechan.vercel.app */
    .then(response => response.json())
    .then(data => { data.forEach( element =>{
        animeQuotes.innerHTML = `${element.character}, once said ${element.quote}`
    })
        
        // console.log(data.quote)
        
    });
}; 
