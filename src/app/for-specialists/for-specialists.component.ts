import {Component, OnInit} from '@angular/core';
import {Service} from '../services/service';
import {SpecialistService} from '../services/specialist.service';

@Component({
  selector: 'app-for-specialists',
  templateUrl: './for-specialists.component.html',
  styleUrls: ['./for-specialists.component.css']
})
export class ForSpecialistsComponent implements OnInit {
  constructor(private specialistService: SpecialistService) {
  }

  services: Service = this.specialistService.getService();

  ngOnInit(): void {
  }


}
