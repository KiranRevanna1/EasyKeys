import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private personalData: any = {};
  private bankData: any = {};

  setPersonalData(data: any) {
    this.personalData = data;
  }

  setBankData(data: any) {
    this.bankData = data;
  }

  getAllData() {
    return { ...this.personalData, ...this.bankData };
  }

  reset() {
  this.personalData = {};
  this.bankData = {};
}
}
