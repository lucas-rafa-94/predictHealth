import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PredictHealthApiService} from './services/predict-health-api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  segunda = false;
  terca = false;
  quarta = false;
  quinta = false;
  sexta = false;
  sabado = false;
  domingo = false;

  sucesso = false;
  erro = false;
  predictHealthService;

  constructor(private router: Router, private spinnerService: NgxSpinnerService, service: PredictHealthApiService){
    this.predictHealthService = service;
    this.dropdownList = [
      { item_id: 1, item_text: 'Segunda' },
      { item_id: 2, item_text: 'Terça' },
      { item_id: 3, item_text: 'Quarta' },
      { item_id: 4, item_text: 'Quinta' },
      { item_id: 5, item_text: 'Sexta' },
      { item_id: 6, item_text: 'Sábado' },
      { item_id: 7, item_text: 'Domingo' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecionar Todos',
      unSelectAllText: 'Deselecionar Todos',
      itemsShowLimit: 8
    };
  }
  onItemSelect(item: any) {
    if(item.item_text === 'Segunda'){
      this.segunda = true;
    }
    if(item.item_text === 'Terça'){
      this.terca = true;
    }
    if(item.item_text === 'Quarta'){
      this.quarta = true;
    }
    if(item.item_text === 'Quinta'){
      this.quinta = true;
    }
    if(item.item_text === 'Sexta'){
      this.sexta = true;
    }
    if(item.item_text === 'Sábado'){
      this.sabado = true;
    }
    if(item.item_text === 'Domingo'){
      this.domingo = true;
    }
    console.log(item);
  }

  onItemDeSelect(item: any) {
    if(item.item_text === 'Segunda'){
      this.segunda = false;
    }
    if(item.item_text === 'Terça'){
      this.terca = false;
    }
    if(item.item_text === 'Quarta'){
      this.quarta = false;
    }
    if(item.item_text === 'Quinta'){
      this.quinta = false;
    }
    if(item.item_text === 'Sexta'){
      this.sexta = false;
    }
    if(item.item_text === 'Sábado'){
      this.sabado = false;
    }
    if(item.item_text === 'Domingo'){
      this.domingo = false;
    }
    console.log(item);
  }
  onSelectAll(items: any) {
    this.segunda = true;
    this.terca = true;
    this.quarta = true;
    this.quinta = true;
    this.sexta = true;
    this.sabado = true;
    this.domingo = true;
  }
  onSubmit(form) {
    console.log(form);
    // this.spinnerService.show();
    this.predictHealthService.submitForm(form).subscribe((data) => {
      console.log(data);
      // this.spinnerService.hide();
      this.sucesso = true;
    }, (error) => {
      // this.spinnerService.hide();
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

  showSegunda(){
    if(this.segunda){
      return true;
    }else {
      return false;
    }
  }

  showTerca(){
    if(this.terca){
      return true;
    }else {
      return false;
    }
  }

  showQuarta(){
    if(this.quarta){
      return true;
    }else {
      return false;
    }
  }

  showQuinta(){
    if(this.quinta){
      return true;
    }else {
      return false;
    }
  }
  showSexta(){
    if(this.sexta){
      return true;
    }else {
      return false;
    }
  }

  showSabado(){
    if(this.sabado){
      return true;
    }else {
      return false;
    }
  }

  showDomingo(){
    if(this.domingo){
      return true;
    }else {
      return false;
    }
  }
}
