import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-all-packs',
  templateUrl: './shop-all-packs.component.html',
  styleUrls: ['./shop-all-packs.component.css'],
})
export class ShopAllPacksComponent {
  packP = [
    {
      nom: 'dehe',
      products: [
        {
          pnom: 'foulara',
          pprice: 20,
          pdesc: 'foulara safra',
          pimg: 'assets/images/shop/p1.jpg',
        },
        {
          pnom: 'maryoul',
          pprice: 20,
          pdesc: 'maryoul ahmer',
          pimg: 'assets/images/shop/p2.jpg',
        },
      ],
    },
    {
      nom: 'dehe',
      products: [
        {
          pnom: 'foulara',
          pprice: 20,
          pdesc: 'foulara safra',
          pimg: 'assets/images/shop/p1.jpg',
        },
        {
          pnom: 'maryoul',
          pprice: 20,
          pdesc: 'maryoul ahmer',
          pimg: 'assets/images/shop/p3.jpg',
        },
        {
          pnom: 'maryoul',
          pprice: 20,
          pdesc: 'maryoul ahmer',
          pimg: 'assets/images/shop/p2.jpg',
        },
      ],
    },
  ];
}
