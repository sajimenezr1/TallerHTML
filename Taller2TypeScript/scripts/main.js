import { series } from './data.js';
let seriesTbody = document.getElementById("series");
const anchorTagElements = document.getElementsByClassName("anchorTagClass");
const dictionary = createDictionary(series);
let serieCard = document.getElementById("serieCard");
renderSeriesInTable(series);
renderAverageSeasons(series);
addOnClickEvent(anchorTagElements);
createDictionary(series);
function addOnClickEvent(elements) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.addEventListener("click", function () {
            renderSeriesCard(this.innerHTML);
        });
    }
}
function createDictionary(series) {
    let dictionary = new Map();
    series.forEach((serie) => {
        dictionary.set(serie.name, serie);
    });
    return dictionary;
}
function renderSeriesCard(serieName) {
    clearCard();
    let serie = dictionary.get(serieName);
    let cardElement = document.createElement("div");
    cardElement.innerHTML = `<img class="card-img-top" src="${serie.image}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${serie.name}</h5>
    <p class="card-text">${serie.description}</p>
    <a href="${serie.url}">${serie.url}</a>
    </div>
    `;
    console.log(serie.image);
    serieCard.appendChild(cardElement);
}
function renderSeriesInTable(series) {
    console.log('Desplegando series en la tabla');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
        <td>${serie.id}</td>
        <td><a href = "#" class = "anchorTagClass">${serie.name}</a></td>
        <td>${serie.chanel}</td>
        <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    let sum = 0;
    series.forEach((serie) => {
        sum += serie.seasons;
    });
    return sum / series.length;
}
function renderAverageSeasons(series) {
    let averageSeasons = getAverageSeasons(series);
    let averageSeasonsElement = document.createElement("tr");
    averageSeasonsElement.innerHTML = `<td class="table-light"> Seasons average: ${averageSeasons}</td>`;
    seriesTbody.appendChild(averageSeasonsElement);
}
function clearCard() {
    while (serieCard.hasChildNodes()) {
        if (serieCard.firstChild != null) {
            serieCard.removeChild(serieCard.firstChild);
        }
    }
}
