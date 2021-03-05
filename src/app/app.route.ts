import {Routes} from "@angular/router";
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ServicesComponent} from './services/services.component';
import {AnswerComponent} from './answer/answer.component';
import {ForSpecialistsComponent} from "./for-specialists/for-specialists.component";

export const routes: Routes = [
  {path: "", component: ServicesComponent},
  {path: "for-specialists", component: ForSpecialistsComponent},
  {path: "answer", component: AnswerComponent },
];
