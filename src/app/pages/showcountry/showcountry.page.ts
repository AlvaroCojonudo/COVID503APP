import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Covid19Service } from 'src/app/services/covid19.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-showcountry',
  templateUrl: './showcountry.page.html',
  styleUrls: ['./showcountry.page.scss'],
})
export class ShowcountryPage implements OnInit {
  @Input() country: string;
  public CountryName: string;
  public CountryConfirmed: number;
  public CountryDeaths: number;
  public CountryActive: number;
  public CountryRecovered: number;
  public Date: string;

  constructor(
    public modalCtrl: ModalController,
    private Covid19: Covid19Service
  ) { }

  ngOnInit() {
    this.Covid19.getSummaryByCountry(this.country).subscribe(datos => {
      this.CountryName = datos[Object.keys(datos).length - 1].Country;
      this.CountryConfirmed = datos[Object.keys(datos).length - 1].Confirmed;
      this.CountryDeaths = datos[Object.keys(datos).length - 1].Deaths;
      this.CountryActive = datos[Object.keys(datos).length - 1].Active;
      this.CountryRecovered = datos[Object.keys(datos).length - 1].Recovered;
      this.Date = new Date(datos[Object.keys(datos).length - 1].Date).toLocaleTimeString("es-SV", { year: "numeric", month: "short", day: "numeric" });
      let casesConfirmeds = [];
      let datesConfirmeds = [];
      let casesDeaths = [];
      let casesActive = [];
      let casesRecovered = [];
      for (let i = 0; i <= Object.keys(datos).length - 1; i++) {
        let dateString: string = new Date(datos[i].Date).toLocaleTimeString("es-SV", { month: "short", day: "numeric" });
        casesConfirmeds.push({ x: dateString, y: datos[i].Confirmed });
        casesDeaths.push({ x: dateString, y: datos[i].Deaths });
        casesActive.push({ x: dateString, y: datos[i].Active });
        casesRecovered.push({ x: dateString, y: datos[i].Recovered });
        datesConfirmeds.push(dateString.substring(0, dateString.length - 10));
      }
      var ctx = document.getElementById('myChartCountry');
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
    });
  }

  public dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
