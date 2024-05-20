import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortService } from './sort.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [SortService, FilterService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "services";

  products: string[] = [];
  filteredProducts: string[] = [];
  numbers: number[] = [];
  sortedNumbers:number[]=[];

  constructor(private filterProductsService: FilterService, private digitsService:SortService) 
  {
    this.products = this.filterProductsService.getProducts();
    this.numbers = this.digitsService.getArray();
    this.sortedNumbers = [...this.numbers];
    this.filterProducts();
  }

  seacrh: string = '';

  filterProducts() {
    if (this.seacrh.trim() !== '') {
      this.filteredProducts = this.filterProductsService.filterProducts(this.seacrh);
    } 
    else {
      this.filteredProducts = this.products;
    }
  }

  onSubmit() {
    this.filterProducts();
  }
  sortDescending() {
    return this.digitsService.sortDescending(this.sortedNumbers);
  }
  sortAscending() {
    return this.digitsService.sortAscending(this.sortedNumbers);
  }
  findMaxValue() {
    return this.digitsService.findMaxValue(this.sortedNumbers);
  }
}