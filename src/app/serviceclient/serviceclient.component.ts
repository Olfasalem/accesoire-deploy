import { Component } from '@angular/core';

@Component({
  selector: 'app-serviceclient',
  templateUrl: './serviceclient.component.html',
  styleUrls: ['./serviceclient.component.css']
})
export class ServiceclientComponent {
  onSubmit() {
  
    alert('Formulaire soumis avec succès!');
  }

}
