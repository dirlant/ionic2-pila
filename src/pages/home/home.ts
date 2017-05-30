import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform, AlertController } from 'ionic-angular';

import { AlertPage } from './../alert/alert';
import { ElementoPage } from './../elemento/elemento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public elementoPage = ElementoPage;
  public AlertPage = AlertPage;
  
  constructor(
    public NavController: NavController, 
    public navParams: NavParams,
    public ActionSheetController: ActionSheetController,
    public Platform: Platform,
    public AlertController: AlertController
  ){

  }

  
  openMenu() {
    let actionSheet = this.ActionSheetController.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.Platform.is('ios') ? 'trash' : null,
          handler: () => {
            alert('Delete');
          }
        },
        {
          text: 'Share',
          icon: !this.Platform.is('ios') ? 'share' : null,
          handler: () => {
            alert('share');
          }
        },
        {
          text: 'Play',
          icon: !this.Platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            alert('Play');
          }
        },
        {
          text: 'Favorite',
          icon: !this.Platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            alert('Favorite');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.Platform.is('ios') ? 'md-albums' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  

  showPrompt() {
    let prompt = this.AlertController.create({
      title: 'Login',
      message: "Necesitamos su correo",
      inputs: [
        {
          name: 'title',
          placeholder: 'Inregrar'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Nombre:' + data.title);
          }
        }
      ]
    });
    prompt.present();
  }

  funcionAdicional(){
    alert('funcion adicional');
  }

}
