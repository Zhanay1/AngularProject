import { Injectable } from '@angular/core';
import {Service} from "./services/service";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private _service: Service[] = [];
  baseURL = 'http://localhost:3000';
  serviceList!: any[];

  constructor(private http: HttpClient) {}

  getService(): Service[] {
    return this._service;
  }
  getServiceData(): Observable<Service[]>{
    return this.http.get<any[]>(this.baseURL + `/Orders`)
  }

  setService(value: Service) {
    this._service.push(value);
  }
}
