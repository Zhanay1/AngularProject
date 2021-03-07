import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {Service} from '../services/service';
import {SpecialistService} from '../services/specialist.service';

@Component({
  selector: 'app-for-specialists',
  templateUrl: './for-specialists.component.html',
  styleUrls: ['./for-specialists.component.css']
})
export class ForSpecialistsComponent implements OnInit {

  firstClient:boolean = true
  defaultClient:boolean = false
  
  constructor(private specialistService: SpecialistService ) {
  }

  services: Service = this.specialistService.getService();

  ngOnInit(): void {
  }


}
