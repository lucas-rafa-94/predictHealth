import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PredictHealthApiService} from './services/predict-health-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inflaRim = 0;
  inflaBexiga = 0;
  sucesso = false;
  erro = false;
  predictHealthService;
  constructor(private router: Router, service: PredictHealthApiService){
    this.predictHealthService = service;
  }
  onSubmit(form) {
    this.inflaRim = 0;
    this.inflaBexiga = 0;
    this.sucesso = false;
    this.erro = false
    console.log(form);
    this.predictHealthService.submitForm(form).subscribe((data) => {
      console.log(data);
      this.inflaRim = data.Results.inflaBexiga[0]["Scored Probabilities"];
      this.inflaBexiga = data.Results.inflaRim[0]["Scored Probabilities"];
      this.sucesso = true;
    }, (error) => {
      console.log(error);
      this.erro = true;
    });
  }
  submitSucesso(){
    if(this.sucesso){
      return true;
    }else {
      return false;
    }
  }

  submitErro(){
    if(this.erro){
      return true;
    }else {
      return false;
    }
  }
}
