import { Component } from '@angular/core';

@Component({
  selector: 'app-blackfriday',
  templateUrl: './blackfriday.component.html',
  styleUrls: ['./blackfriday.component.css']
})
export class BlackfridayComponent {
  produits = [
    {'name': 'telephone sumsong', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/1.jpg'},
    {'name': 'telephone s31', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/2.jpg'},
    {'name': 'pc asus', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/3.jpg'},
    {'name': 'pc sumsong', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/4.jpg'},
    {'name': 'airpods', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/5.jpg'},
    {'name': 'telephone', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/1.jpg'},
    ];

}
