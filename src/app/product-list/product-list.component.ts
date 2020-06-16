import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Le produit à été partagé !');
  }

  onNotify() {
    window.alert('Vous serez averti lorsqu \' il y \'aura une promotion sur ce produit !');
  }
}