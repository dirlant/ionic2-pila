import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';

@Component({
    selector: 'page-item',
    templateUrl: 'item.html',
})

export class ItemPage {
    public numeroPagina: number;    

    constructor(
      public _navParams: NavParams,
    ) {
      this.numeroPagina = _navParams.get('numero');
     
    }
}