import { Component } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent {
  produits = [
    {'name': 'telephone sumsong', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'3 dt','image':'https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/j/d/jd-tg-a710_1.jpg','pourcentage':'20%','prixneuv':'1 dt'},
    {'name': 'telephone s31', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'10 dt','image':'https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/1/_/1_1223_1.jpg','pourcentage':'20%','prixneuv':'8 dt'},
    {'name': 'pc asus', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'29 det','image':'https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/c/h/chargeur-samsung-adaptable-pour-pc-portable-19v-grand-bec-3-16a.jpg','pourcentage':'20%','prixneuv':'25 dt'},
    {'name': 'pc sumsong', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/p/c/pc-portable-asus-zenbook-14-amd-ryzen-7-8go-512go-ssd-gris-51.jpg','pourcentage':'20%','prixneuv':'1200'},

    ];

}
