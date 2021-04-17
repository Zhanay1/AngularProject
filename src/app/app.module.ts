import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AnswerComponent } from './answer/answer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ForSpecialistsComponent } from './for-specialists/for-specialists.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module"
import { Discount } from './pipes/Discount';
import { ForSpecialistsGuard } from './for-specialists/for-specialists.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AnswerComponent,
    ForSpecialistsComponent, 
    Discount
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
  ],
  providers:[ ForSpecialistsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
