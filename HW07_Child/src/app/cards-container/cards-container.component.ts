import { Component, ViewChildren, QueryList  } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardBlockComponent, FormsModule, NgFor, NgIf, CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {

  products = [
    { id: 1, name: 'Product 1', price: 110, description: 'Product 1 text description', color: 'red' },
    { id: 2, name: 'Product 2', price: 120, description: 'Product 2 text description', color: 'green' },
    { id: 3, name: 'Product 3', price: 130, description: 'Product 3 text description', color: 'blue' },
    { id: 4, name: 'Product 4', price: 140, description: 'Product 4 text description', color: 'yellow' },
    { id: 5, name: 'Product 5', price: 150, description: 'Product 5 text description', color: 'orange' },
    { id: 6, name: 'Product 6', price: 160, description: 'Product 6 text description', color: 'purple' },
    { id: 7, name: 'Product 7', price: 170, description: 'Product 7 text description', color: 'pink' }
];

  selectedProduct: any = null;
  discountApplied: boolean = false;

  selectProduct(product: any) {
    this.selectedProduct = product;
  }
  applyDiscount() {
    this.discountApplied = true;
    this.getChildComponents();
  }

  @ViewChildren(CardBlockComponent) cardBlocks!: QueryList<CardBlockComponent>;
  getChildComponents() {
    const childComponents = this.cardBlocks.toArray();
    console.log('Child Components:', childComponents);
  }
}
