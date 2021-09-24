class Anime {
    constructor(name1, gender, year) {
        this.name1 = name1,
            this.gender = gender,
            this.year = year;
    }
}

class UI {
    addAnime(anime) {
        // const animeList = $('#anime_list');
        // const element = $('div').text('');
        const animeList = document.getElementById('anime_list');
        const element = document.createElement('div');
        element.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Anime Name</strong>: ${anime.name1}
                    <strong>Anime Gender</strong>: ${anime.gender}
                    <strong>Anime Year</strong>: ${anime.year}
                </div>
            </div>
            <a href="#"></a>
        `;
        animeList.appendChild(element);
        // $(animeList).append(element);
    }
    resetForm() {
        document.getElementById('product_form').reset();
    }
};

document.getElementById('product_form')
    .addEventListener('submit', function (e) {
        const nameInput = document.getElementById('name').value;
        const genderInput = document.getElementById('gender').value;
        const yearInput = document.getElementById('year').value;
        const anime1 = new Anime(name1, gender, year);
        const ui = new UI();
        ui.addAnime(anime1);
        ui.resetForm(); /*resetea el form */
        console.log(`${anime1} -> anime 1, ${ui} -> ui`)

        e.preventDefault(); /*para que no refresque la pag de una */
    });