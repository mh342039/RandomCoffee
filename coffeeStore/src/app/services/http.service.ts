import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  coffeeLst: Coffee[] = [];
  apiUrl = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private http: HttpClient) {
  }

  getCoffee(): Observable<Coffee[]> {
    return this.http
    .get<Coffee>(this.apiUrl)
      .pipe(map((data: Coffee) => {
        console.log(data)
        this.coffeeLst.push(data);
        return this.coffeeLst;
      }));
  }
 

}
