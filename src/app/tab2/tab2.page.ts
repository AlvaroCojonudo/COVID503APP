import { Component } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';
import Chart from 'chart.js';
import { ModalController } from '@ionic/angular';
import { ShowcountryPage } from '../pages/showcountry/showcountry.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public date: string = "no hay nada que ver";
  public confirmed: number = 0;
  public deaths: number = 0;
  public recovered: number = 0;
  public newconfirmed: number = 0;
  public newdeaths: number = 0;
  public newrecovered: number = 0;
  public statusUS;
  constructor(
    private Covid19: Covid19Service,
    public modalController: ModalController
  ) {
    this.Covid19.getSummaryWorldPopular().subscribe(datosG => {
      let datos: any = datosG;
      this.date = new Date(datos.Date).toLocaleTimeString("es-SV", { year: "numeric", month: "short", day: "numeric" });
      //console.log(datos);
      //console.log(datos.Global);
      this.confirmed = datos.Global.TotalConfirmed;
      this.deaths = datos.Global.TotalDeaths;
      this.recovered = datos.Global.TotalRecovered;
      this.newconfirmed = datos.Global.NewConfirmed;
      this.newdeaths = datos.Global.NewDeaths;
      this.newrecovered = datos.Global.NewRecovered;
      //this.statusUS = datos.Countries.find(({ CountryCode }) => CountryCode === 'US');
      //this.Covid19.getSummaryUS().subscribe(datosUS => {
      //  console.log(datosUS);
      //  let casesConfirmeds = [];
      //  let datesConfirmeds = [];
      //  let casesDeaths = [];
      //  let casesActive = [];
      //  let casesRecovered = [];
      //  for (let i = 0; i <= Object.keys(datosUS).length - 1; i++) {
      //    let dateString: string = new Date(datosUS[i].Date).toLocaleTimeString("es-SV", { month: "short", day: "numeric" });
      //    casesConfirmeds.push({ x: dateString, y: datosUS[i].Confirmed });
      //    casesDeaths.push({ x: dateString, y: datosUS[i].Deaths });
      //    casesActive.push({ x: dateString, y: datosUS[i].Active });
      //    casesRecovered.push({ x: dateString, y: datosUS[i].Recovered });
      //    datesConfirmeds.push(dateString.substring(0, dateString.length - 10));
      //    var ctx = document.getElementById('myChartUS');
      //    var myChart = new Chart(ctx, {
      //      type: 'line',
      //      data: {
      //        labels: datesConfirmeds,
      //        datasets: [
      //          {
      //            label: 'Muertes',
      //            backgroundColor: 'rgba(255, 15, 15, 0.8)',
      //            data: casesDeaths,
      //            fill: true,
      //            pointRadius: 0
      //          },
      //          {
      //            label: 'Recuperados',
      //            fill: true,
      //            backgroundColor: 'rgba(15, 235, 255, 0.6)',
      //            data: casesRecovered,
      //            pointRadius: 0
      //          },
      //          {
      //            label: 'Activos',
      //            fill: true,
      //            backgroundColor: 'rgba(15, 119, 255, 0.8)',
      //            data: casesActive,
      //            pointRadius: 0
      //          },
      //          {
      //            label: 'Confirmados',
      //            fill: true,
      //            backgroundColor: 'rgba(33, 219, 0, 1)',
      //            data: casesConfirmeds,
      //            pointRadius: 0
      //          }
      //        ]
      //      },
      //      options: {
      //        scales: {
      //          yAxes: [{
      //            ticks: {
      //              beginAtZero: true
      //            }
      //          }]
      //        }
      //      }
      //    });
      //  }
      //});
    });
  }

  async presentModal(country: string) {
    console.log(country);
    const modal = await this.modalController.create({
      component: ShowcountryPage,
      componentProps: {
        'country': country
      }
    });
    return await modal.present();
  }

}
