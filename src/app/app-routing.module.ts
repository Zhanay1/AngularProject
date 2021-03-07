import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from './services/services.component';
import {AnswerComponent} from './answer/answer.component';
import {ForSpecialistsComponent} from "./for-specialists/for-specialists.component";

const routes: Routes = [
{path: "", component: ServicesComponent},
{path: "for-specialists", component: ForSpecialistsComponent},
{path: "answer", component: AnswerComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
