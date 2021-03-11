import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {SpecialistService} from "../specialist.service";
import {Service} from "../services/service";
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  closeResult = '';
  services: Service = new Service();

  constructor(private modalService: NgbModal,
              private specialistService: SpecialistService,
              // private loggingService: LoggingService
              ) { }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }
  sendServices(): void{
    console.log("Service " + this.services);
    this.specialistService.setService(this.services);
    // this.loggingService.log('set services in services.component.ts')
    this.services = new Service()
  }

}
