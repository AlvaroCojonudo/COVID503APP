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
      let casesDeaths = [];
      this.date = new Date(datos[Object.keys(datos).length - 1].Date);
      for (let i = 0; i <= Object.keys(datos).length - 1; i++) {
        //casesConfirmeds.push(datos[i].Confirmed);
        //casesDeaths.push(datos[i].Deaths);
        let mes: string;
        switch (new Date(datos[i].Date).getUTCMonth() + 1) {
          case 1:
            mes = "Ene";
            break;
          case 2:
            mes = "Feb";
            break;
          case 3:
            mes = "Mar";
            break;
          case 4:
            mes = "Abr";
            break;
          case 5:
            mes = "May";
            break;
          case 6:
            mes = "Jun";
            break;
          case 7:
            mes = "Jul";
            break;
          case 8:
            mes = "Ago";
            break;
          case 9:
            mes = "Sep";
            break;
          case 10:
            mes = "Oct";
            break;
          case 11:
            mes = "Nov";
            break;
          case 12:
            mes = "Dic";
            break;

          default:
            mes = "-";
            break;
        }
        let dateString: string = new Date(datos[i].Date).getUTCDate().toString() + "/" + mes;
        casesConfirmeds.push({ x: dateString, y: datos[i].Confirmed });
        casesDeaths.push({ x: dateString, y: datos[i].Deaths });
        datesConfirmeds.push(dateString);
      }
      //console.log(casesDeaths);
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: datesConfirmeds,
          datasets: [{
            label: 'Casos Confirmados',
            data: casesConfirmeds,
            fill: true,
            backgroundColor: 'rgba(44, 242, 74, 0.4)',
            borderColor: 'rgba(44, 242, 74, 1)',
            borderWidth: 1,
            pointBorderWidth: 0,
            pointStyle: "line"
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