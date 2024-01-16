import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { PhoneComponent } from './phone/phone.component';
import { PcComponent } from './pc/pc.component';
import { GamingComponent } from './gaming/gaming.component';
import { PromoComponent } from './promo/promo.component';
import { BlackfridayComponent } from './blackfriday/blackfriday.component';
import { ServiceclientComponent } from './serviceclient/serviceclient.component';
import { AchatComponent } from './achat/achat.component';

const routes: Routes = [
  { path: '', component: ProduitsComponent, pathMatch:'full'},
  { path: 'phone', component: PhoneComponent},
  { path: 'pc', component: PcComponent},
  { path: 'games', component: GamingComponent},
  { path: 'promo', component: PromoComponent},
  { path: 'blackfriday', component: BlackfridayComponent},
  { path: 'service', component: ServiceclientComponent},
  { path: 'achat', component: AchatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
