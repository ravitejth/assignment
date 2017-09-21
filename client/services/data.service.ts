
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
  private baseURL: string;
  static counter: number = 0;

  constructor(
    private http : HttpService
  ){
    this.baseURL = "https://google.com/"
  }

  get(url) {
    DataService.counter += 1;
    let getURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.get(getURL).subscribe((data: any) => {
          let response = JSON.parse(data._body);
        },
        (e) =>{
          DataService.handleError(e);
        });
    });
    return observable;
  }

  post(url,data){
    DataService.counter += 1;
    let postURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.post(postURL,data).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          observer.next(response);
        },
        (e) =>{
          DataService.handleError(e);
        })
    });
    return observable;
  }

  update(url,data){
    DataService.counter += 1;
    let putURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.put(putURL,data).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          observer.next(response);
        },
        (e) =>{
          DataService.handleError(e);
        });
    });
    return observable;
  }

  delete(url){
    DataService.counter += 1;
    let deleteURL = this.baseURL+ url;
    let observable = new Observable(observer => {
      this.http.delete(deleteURL).subscribe((data: any) => {
          let response = JSON.parse(data._body);
          observer.next(response);
        },
        (e) =>{
          DataService.handleError(e);
        });
    });
    return observable;
  }

  static handleError(error: any){
    return Observable.throw(error.json().error || 'Server error');
  }

}
