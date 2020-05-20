import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-showcountry',
  templateUrl: './showcountry.page.html',
  styleUrls: ['./showcountry.page.scss'],
})
export class ShowcountryPage implements OnInit {
  @Input() country: string;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  public dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
