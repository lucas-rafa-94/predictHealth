import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictHealthApiService {
  constructor(private http: HttpClient) { }
  submitForm(payload) {
    const url = 'http://localhost:8089/feira-app/api/feiras/cadastro';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(url, payload ,{headers});
  }
}



