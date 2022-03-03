import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonneAjouterComponent } from './personne-ajouter/personne-ajouter.component';
import { MenuComponent } from './menu/menu.component';
import { AproposComponent } from './apropos/apropos.component';
import { PersonneListerComponent } from './personne-lister/personne-lister.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { UpperfirstPipe } from './pipes/upperfirst.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonneAjouterComponent,
    MenuComponent,
    AproposComponent,
    PersonneListerComponent,
    ContactComponent,
    PersonneDetailComponent,
    UpperfirstPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
