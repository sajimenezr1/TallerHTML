import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private SeriesService : SeriesService) { }
  series : Array<Serie> = [];
  averageSeasons  = 0;

  ngOnInit() {
    this.getSeries();
  }

  ngDoCheck(){
    this.getAverageSeasons(this.series);
  }

  getSeries(){
    this.SeriesService.getSeries().subscribe(
      series => {
        this.series = series;
      }
    );
  }

  getAverageSeasons(series : Array<Serie>){
    console.log(series);
    let sum : number = 0;
    series.forEach((serie) => {
        sum += serie.seasons;
    });
    this.averageSeasons = sum / series.length;
}

}
