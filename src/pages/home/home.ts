import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RhevapiProvider } from '../../providers/rhevapi/rhevapi';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  asdf: any;
  constructor(public navCtrl: NavController, public rhevapi: RhevapiProvider, private toastCtrl: ToastController) {
    this.getdata()
  }

  getdata() {
    this.rhevapi.getdata()
    .then(data => {
      this.presentToast(data)
     // this.asdf = data;
      //console.log(this.asdf);
    });
  } 

  presentToast(page) {
    let toast = this.toastCtrl.create({
      message: 'This ' + page.status,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
