import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  
  public textoPagina: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ){
    this.textoPagina = navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
