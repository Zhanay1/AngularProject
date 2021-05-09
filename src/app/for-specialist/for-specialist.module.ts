import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForSpecialistsComponent } from '../for-specialists/for-specialists.component';
import { Discount } from '../pipes/Discount';


@NgModule({
  declarations: [
    ForSpecialistsComponent, 
    Discount
  ],
  imports: [
    CommonModule
  ]
})
export class ForSpecialistModule { }
