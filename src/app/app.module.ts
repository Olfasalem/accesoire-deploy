import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProduitsComponent } from './produits/produits.component';
import { PhoneComponent } from './phone/phone.component';
import { PcComponent } from './pc/pc.component';
import { GamingComponent } from './gaming/gaming.component';
import { PromoComponent } from './promo/promo.component';
import { BlackfridayComponent } from './blackfriday/blackfriday.component';
import { ServiceclientComponent } from './serviceclient/serviceclient.component';
import { FormsModule } from '@angular/forms';
import { AchatComponent } from './achat/achat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ProduitsComponent,
    PhoneComponent,
    PcComponent,
    GamingComponent,
    PromoComponent,
    BlackfridayComponent,
    ServiceclientComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
