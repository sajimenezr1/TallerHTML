import { series } from './data.js';
var seriesTbody = document.getElementById("series");
renderSeriesInTable(series);
renderAverageSeasons(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series en la tabla');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td><a href = \"").concat(serie.url, "\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.chanel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.seasons;
    });
    return sum / series.length;
}
function renderAverageSeasons(series) {
    var averageSeasons = getAverageSeasons(series);
    var averageSeasonsElement = document.createElement("tr");
    averageSeasonsElement.innerHTML = "<td class=\"table-light\"> Seasons average: ".concat(averageSeasons, "</td>");
    seriesTbody.appendChild(averageSeasonsElement);
}
