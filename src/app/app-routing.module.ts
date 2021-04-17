import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from './services/services.component';
import {AnswerComponent} from './answer/answer.component';
import {ForSpecialistsComponent} from "./for-specialists/for-specialists.component";
import { ForSpecialistsGuard } from './for-specialists/for-specialists.guard';

const routes: Routes = [
{path: "", component: ServicesComponent},
{path: "for-specialists", component: ForSpecialistsComponent, 
canActivate: [ForSpecialistsGuard]},
{path: "answer", component: AnswerComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[ForSpecialistsGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
