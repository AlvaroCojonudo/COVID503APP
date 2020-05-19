import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Covid19Service } from '../services/covid19.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public date: Date = new Date();
  public confirmed;
  public deaths;
  public recovered;
  public active;
  constructor(private Covid19: Covid19Service) {
    this.Covid19.getSummarySV().subscribe(datos => {
      let casesConfirmeds = [];
      let datesConfirmeds = [];
      for (let i = 0; i <= Object.keys(datos).length - 1; i++) {
        casesConfirmeds.push(datos[i].Confirmed);
        let dateString:string = new Date(datos[i].Date).getUTCDate().toString() + "/" + (new Date(datos[i].Date).getUTCMonth() + 1).toString() + "/" + new Date(datos[i].Date).getUTCFullYear().toString();
        datesConfirmeds.push(dateString);
      }

      console.log(casesConfirmeds, datesConfirmeds);
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: datesConfirmeds,
          datasets: [{
            label: 'Casos Confirmados',
            data: casesConfirmeds,
            fill: 'rgba(44, 242, 74, 1)',
            backgroundColor: 'rgba(44, 242, 74, 1)',
            borderWidth: 1,
            pointBorderWidth: 1
            //  ,
            //  'rgba(54, 162, 235, 0.2)',
            //  'rgba(255, 206, 86, 0.2)',
            //  'rgba(75, 192, 192, 0.2)',
            //  'rgba(153, 102, 255, 0.2)',
            //  'rgba(255, 159, 64, 0.2)'
            //],
            //borderColor: [
            //  'rgba(255, 99, 132, 1)',
            //  'rgba(54, 162, 235, 1)',
            //  'rgba(255, 206, 86, 1)',
            //  'rgba(75, 192, 192, 1)',
            //  'rgba(153, 102, 255, 1)',
            //  'rgba(255, 159, 64, 1)'
            //],
            //borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      this.confirmed = datos[Object.keys(datos).length - 1].Confirmed;
      this.deaths = datos[Object.keys(datos).length - 1].Deaths;
      this.recovered = datos[Object.keys(datos).length - 1].Recovered;
      this.active = datos[Object.keys(datos).length - 1].Active;
    });
  }
  ngOnInit() {

  }
}