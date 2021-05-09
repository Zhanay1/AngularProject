import {Component, OnInit} from '@angular/core';
// import { LoggingService } from '../logging.service';
import {Service} from '../services/service';
import {SpecialistService} from '../specialist.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-for-specialists',
  templateUrl: './for-specialists.component.html',
  styleUrls: ['./for-specialists.component.css']
})
export class ForSpecialistsComponent implements OnInit {
  firstClient:boolean = true
  defaultClient:boolean = false
  
  constructor(private specialistService: SpecialistService, 
              // private loggingService: LoggingService 
              ) {
  }

  services: Service[] = []
  servicesDB: Service[] = []

  ngOnInit(): void {
    this.servicesDB = this.specialistService.getService(); 
    this.specialistService.getServiceData()
      .subscribe(data => {
        this.services = data});
    // this.loggingService.log('get services in for-specialists.components.ts')
    console.log(this.services)
  }
}
