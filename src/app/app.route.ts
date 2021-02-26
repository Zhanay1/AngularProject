import {Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AnswerComponent } from './answer/answer.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent}, 
    {path: "footer", component: FooterComponent}, 
    {path: "services", component: ServicesComponent}, 
    {path: "answer", component: AnswerComponent}
]