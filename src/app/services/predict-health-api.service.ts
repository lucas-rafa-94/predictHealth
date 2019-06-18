import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictHealthApiService {
  constructor(private http: HttpClient) { }
  submitForm(payload) {
    const url = 'https://ussouthcentral.services.azureml.net/workspaces/f2fc0aabc6bc41b39e6f56afd008532b/services/0e9bf66c686842a3958f9a11ae33dc5a/execute?api-version=2.0&format=swagger';
    const apiToken = 'zXDT8DtcpmIdlyRiXAteUKAr8yrffCd6y5/RtQIReOLwFp3KZo+7842wbBLtv1zbZsrW2liuVEV8KUluw6CANQ==';
    const headers = new HttpHeaders()
      .set('Bearer', apiToken)
      .set('Content-Type', 'application/json');
    return this.http.post(url, payload ,{headers});
  }
}
