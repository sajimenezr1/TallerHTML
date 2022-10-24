import {Serie} from './Serie.js';
import {series} from './data.js';

let seriesTbody : HTMLElement = document.getElementById("series")!;

renderSeriesInTable(series);
renderAverageSeasons(series);

function renderSeriesInTable(series: Serie[]){
    console.log('Desplegando series en la tabla');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
        <td>${serie.id}</td>
        <td><a href = "${serie.url}">${serie.name}</a></td>
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