import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { TestPage } from './../test/test';


@Component({
    selector: 'page-elemento',
    templateUrl: 'elemento.html',
})

export class ElementoPage {
    public numeroPagina: number;
    public elementoPage = ElementoPage;
    public testPage = TestPage;
    
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams
    ){
      this.numeroPagina = navParams.get('numero');
    }

}