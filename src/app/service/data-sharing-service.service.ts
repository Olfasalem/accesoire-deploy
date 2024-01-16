import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {


  private sharedTitre: string = '';
  private sharedDesc: string = '';

  private sharedImage: string = './assets/img';
  private sharedPrix: number = 0;

  setTitre(titre: string): void {
    this.sharedTitre = titre;
  }

  getTitre(): string {
    return this.sharedTitre;
  }

  setDesc(desc: string): void {
    this.sharedDesc = desc;
  }

  getDesc(): string {
    return this.sharedDesc;
  }







  setImage(): void {
    this.sharedImage = './assets/img';
  }

  getImage(): string {
    return this.sharedImage;
  }

  setPrix(prix: number): void {
    this.sharedPrix = prix;
  }

  getPrix(): number {
    return this.sharedPrix;
  }
}

