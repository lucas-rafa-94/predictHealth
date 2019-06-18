import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PredictHealthApiService} from './services/predict-health-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  predictHealthService;
  constructor(private router: Router, service: PredictHealthApiService){
    this.predictHealthService = service;
  }
  onSubmit(form) {
    const payload = ` {
      Inputs: {
        input1:
          [
            {
              'temperatura': ` + form.temperatura + ` ,
              'nausea': ` + form.nausea  + `,
              'dor lombar': ` + form.lombar  + `,
              'urinando muito': ` + form.urinando  + `,
              'Dor ao urinar': ` + form.dorUrinando  + `,
              'queimcao na uretra': ` + form.queimacaoUretra  + `,
            }
          ],
      },
      GlobalParameters: {
      }
    } `;
    console.log(payload);
    this.predictHealthService.submitForm(payload).subscribe((data) => {
      console.log(data);
    });
  }
}
