import {Serie} from './Serie.js';
import {series} from './data.js';

let seriesTbody : HTMLElement = document.getElementById("series")!;
const anchorTagElements : HTMLCollection = document.getElementsByClassName("anchorTagClass")!;
const dictionary : Map<string, Serie> = createDictionary(series);
let serieCard : HTMLElement = document.getElementById("serieCard")!;

renderSeriesInTable(series);
renderAverageSeasons(series);
addOnClickEvent(anchorTagElements);
createDictionary(series);

function addOnClickEvent(elements : HTMLCollection){
    for(let i = 0; i < elements.length; i++){
        let element : HTMLElement = elements[i] as HTMLElement;
        element.addEventListener("click", function(this){
            renderSeriesCard(this.innerHTML);
        });	
    }
}

function createDictionary(series : Serie[]) : Map<string, Serie>{
    let dictionary : Map<string, Serie> = new Map();
    series.forEach((serie) => {
        dictionary.set(serie.name, serie);
    });
    return dictionary;
}

function renderSeriesCard(serieName : string){
    clearCard();
    let serie : Serie = dictionary.get(serieName)!;
    let cardElement : HTMLElement = document.createElement("div");
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

function renderSeriesInTable(series: Serie[]){
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

function getAverageSeasons(series : Serie[]) : number{
    let sum : number = 0;
    series.forEach((serie) => {
        sum += serie.seasons;
    });
    return sum/series.length;
}

function renderAverageSeasons(series : Serie[]): void{
    let averageSeasons : number = getAverageSeasons(series);
    let averageSeasonsElement : HTMLElement = document.createElement("tr");
    averageSeasonsElement.innerHTML = `<td class="table-light"> Seasons average: ${averageSeasons}</td>`;
    seriesTbody.appendChild(averageSeasonsElement);
}

function clearCard(){
    while (serieCard.hasChildNodes()) {
        if (serieCard.firstChild != null) {
          serieCard.removeChild(serieCard.firstChild);
         
        }
      }
}
