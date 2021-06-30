import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
  public identity;
  constructor() { }


  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }


  async getIdentity(key: string)
  {
      const resp = await localStorage.getItem(key);
      this.identity = JSON.parse(resp);
      return this.identity; 
  }
  // public getItem(key: string){ 
  //   return localStorage.getItem(key)
  // }
  
  public removeItem(key:string) {
    localStorage.removeItem(key);
  }
//   public clear(){
//     localStorage.clear(); 
//   }
}