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
  scoreLabelRim= '';
  scoreLabelBexiga= '';
  sucesso = false;
  erro = false;
  predictHealthService;
  constructor(private router: Router, service: PredictHealthApiService){
    this.predictHealthService = service;
  }
  onSubmit(form) {
    this.inflaRim = 0;
    this.inflaBexiga = 0;
    this.scoreLabelRim= '';
    this.scoreLabelBexiga= '';
    this.sucesso = false;
    this.erro = false
    console.log(form);
    this.predictHealthService.submitForm(form).subscribe((data) => {
      console.log(data);
      this.inflaRim = data.Results.inflaRim[0]["Scored Probabilities"];
      this.scoreLabelRim = data.Results.inflaRim[0]["Scored Labels"];
      this.inflaBexiga = data.Results.inflaBexiga[0]["Scored Probabilities"];
      this.scoreLabelBexiga = data.Results.inflaBexiga[0]["Scored Labels"];
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
