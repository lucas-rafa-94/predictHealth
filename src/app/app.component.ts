import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PredictHealthApiService} from './services/predict-health-api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sucesso = false;
  erro = false;
  predictHealthService;
  constructor(private router: Router, private spinnerService: NgxSpinnerService, service: PredictHealthApiService){
    this.predictHealthService = service;
  }
  onSubmit(form) {
    console.log(form);
    this.spinnerService.show();
    this.predictHealthService.submitForm(form).subscribe((data) => {
      console.log(data);
      this.spinnerService.hide();
      this.sucesso = true;
    }, (error) => {
      this.spinnerService.hide();
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
