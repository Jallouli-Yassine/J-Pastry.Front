import { Component } from '@angular/core';

@Component({
  selector: 'app-newest-collections',
  templateUrl: './newest-collections.component.html',
  styleUrls: ['./newest-collections.component.css'],
})
export class NewestCollectionsComponent {
  lastPack = {
    nom: 'dehe',
    products: [
      {
        pnom: 'foulara',
        pprice: 20,
        pdesc: 'foulara safra',
      },
      {
        pnom: 'maryoul',
        pprice: 20,
        pdesc: 'maryoul ahmer',
      },
      {
        pnom: 'maryoul',
        pprice: 20,
        pdesc: 'maryoul ahmer',
      },
    ],
  };
}
