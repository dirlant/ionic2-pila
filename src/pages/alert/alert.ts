import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(
    public NavController: NavController, 
    public NavParams: NavParams,
    public AlertController: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }


  testRadioOpen: boolean;
  testRadioResult;
  
  doRadio() {
    let alert = this.AlertController.create();
    alert.setTitle('Titulo del listado');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Eleccion seleccionada:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }
  
  showPrompt() {
    let prompt = this.AlertController.create({
      title: 'Titulo de la confirmación',
      message: "Ingrese el titulo",
      inputs: [
        {
          name: 'nombreCampo',
          placeholder: 'Titulo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Proceso cancelado');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Devuelve el valor del input: '+ data.nombreCampo);
          }
        }
      ]
    });
    prompt.present();
  }
  
  showAlert() {
    let alert = this.AlertController.create({
      title: 'Alerta por defecto',
      message: 'Mensaje de la alerta',
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.present();
  }

}
