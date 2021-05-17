import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  coloresApi = ['#0E0B16','#A239CA','#4717F6','#E7DFDD','#66AB8C','#FA7C92'];


  isNumber(n : any) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  getRandomColor(obj?: any,isApi?: boolean): string {

    if(isApi) return this.coloresApi[obj];

    const letters = '0123456789ABCDEF';
    let color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

}
