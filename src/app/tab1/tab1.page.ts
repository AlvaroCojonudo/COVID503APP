import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Covid19Service } from '../services/covid19.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public date: string;
  public confirmed;
  public deaths;
  public recovered;
  public active;
  constructor(private Covid19: Covid19Service) {
    this.Covid19.getSummarySV().subscribe(datos => {
      let casesConfirmeds = [];
      let datesConfirmeds = [];
      let casesDeaths = [];
      let casesActive = [];
      let casesRecovered = [];
      this.date = new Date(datos[Object.keys(datos).length - 1].Date).toLocaleTimeString("es-SV", { year: "numeric", month: "short", day: "numeric" });
      for (let i = 0; i <= Object.keys(datos).length - 1; i++) {
        let dateString: string = new Date(datos[i].Date).toLocaleTimeString("es-SV", { month: "short", day: "numeric" });
        casesConfirmeds.push({ x: dateString, y: datos[i].Confirmed });
        casesDeaths.push({ x: dateString, y: datos[i].Deaths });
        casesActive.push({ x: dateString, y: datos[i].Active });
        casesRecovered.push({ x: dateString, y: datos[i].Recovered });
        datesConfirmeds.push(dateString.substring(0, dateString.length - 10));
      }
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: datesConfirmeds,
          datasets: [
            {
              label: 'Muertes',
              backgroundColor: 'rgba(255, 15, 15, 0.8)',
              data: casesDeaths,
              fill: true,
              pointRadius: 0
            },
            {
              label: 'Recuperados',
              fill: true,
              backgroundColor: 'rgba(15, 235, 255, 0.6)',
              data: casesRecovered,
              pointRadius: 0
            },
            {
              label: 'Activos',
              fill: true,
              backgroundColor: 'rgba(15, 119, 255, 0.8)',
              data: casesActive,
              pointRadius: 0
            },
            {
              label: 'Confirmados',
              fill: true,
              backgroundColor: 'rgba(33, 219, 0, 1)',
              data: casesConfirmeds,
              pointRadius: 0
            }
          ]
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