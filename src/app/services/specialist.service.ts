import { Injectable } from '@angular/core';
import {Service} from "./service";

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private _service: Service = new Service();
  constructor() {
  }

  getService(): Service {
    return this._service;
  }

  setService(value: Service) {
    this._service = value;
  }
}
