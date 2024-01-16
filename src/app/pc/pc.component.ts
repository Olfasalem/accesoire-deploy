import { Component } from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent {
  pcs = [

    {'name': 'pc asus', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/3.jpg'},
    {'name': 'pc sumsong', 'desc': 'fsgfsgfvsvfgerfvgrd','prix':'1508','image':'./assets/img/4.jpg'},
    ];

}
