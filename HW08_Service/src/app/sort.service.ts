import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor() { }

  private numbers = [5,7,2,3,1,8,10,9,6,4,0];

  getArray() {
    return this.numbers;
  }

  sortDescending(arr:number[]) {
    return arr.sort((a, b) => b - a);

  }

  sortAscending(arr:number[]) {
    return arr.sort((a, b) => a - b);

  }

  findMaxValue(arr:number[]) {
    return Math.max(...arr);
  }
}
