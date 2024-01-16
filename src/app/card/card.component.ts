import { Component, Input } from '@angular/core';
import { DataSharingService } from '../service/data-sharing-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Name!: string;
  @Input() Desc!: string;
  @Input() Prix!: string;
  @Input() Image!: string;
  @Input() Index!: number;

  Titre!: string;


  constructor(private dataSharingService: DataSharingService) {}

  achatprod() {
    this.Titre = this.Name;
    // Utilisez une nouvelle variable pour éviter de modifier les données d'entrée directement
    const description = this.Desc;
    const prix = parseFloat(this.Prix);

    this.dataSharingService.setTitre(this.Titre);
    console.log('Nom du produit:', this.Titre);

    this.dataSharingService.setDesc(description);
    console.log('Description du produit:', description);

    // Assurez-vous que le prix est un nombre valide avant de le stocker
    if (!isNaN(prix)) {
      this.dataSharingService.setPrix(prix);
      console.log('Prix du produit:', prix);
    } else {
      console.error('Le prix n\'est pas un nombre valide.');
    }
  }
}
