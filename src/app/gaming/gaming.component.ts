import { Component } from '@angular/core';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent {
  games = [
    {'name': 'pc MSI', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'3222','image':'./assets/img/pc-portable-gamer-gigabyte-g5-ge-i5-12e-gen-16go-rtx-3050-k.jpg'},
    {'name': 'ecran pc MSI', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/ecran-gaming-cooler-master-ga241-23-8-full-hd-100hz.jpg'},
   ];

}
