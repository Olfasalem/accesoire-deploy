import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing-service.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  titre: string = '';
  description: string = '';
  prix: number = 0;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    // Utilisez les méthodes du service pour récupérer les valeurs partagées
    this.titre = this.dataSharingService.getTitre();
    this.description = this.dataSharingService.getDesc();
    this.prix = this.dataSharingService.getPrix();
  }
}
