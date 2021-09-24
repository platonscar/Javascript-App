class Anime {
    constructor(name1, gender, year) {
        this.name1 = name1,
        this.gender = gender,
        this.year = year;
    }
}

document.getElementById('product_form').addEventListener('submit', function(e){
    const nameInput =  document.getElementById('name').value;
    const genderInput = document.getElementById('gender').value;
    const yearInput = document.getElementById('year').value;
    const anime = new Anime(name1, gender, year);
    e.preventDefault(); /*para que no refresque la pag de una */
});