import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './services/service';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/Orders/"


  getUsers()
  {
    return this.http.get<Service[]>(this.url);
  }
}