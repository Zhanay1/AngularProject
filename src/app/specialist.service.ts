import { Injectable } from '@angular/core';
import {Service} from "./services/service";

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private _service: Service[] = [];
  constructor() {
  }

  getService(): Service[] {
    return this._service;
  }

  setService(value: Service) {
    this._service.push(value);
  }
}
