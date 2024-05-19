import { Component, Input, Output, EventEmitter, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [],
  templateUrl: './card-block.component.html',
  styleUrl: './card-block.component.css'
})
export class CardBlockComponent {

  @Input() productName: string = "Default Product";
  @Input() productPrice: number = 0;
  @Input() hasDiscount: boolean = false;
  @Input() productColor: string="black";
  @Output() select = new EventEmitter<void>();

  onSelect() {
    this.select.emit();
  }
  
  getPrice(): number {
    if (this.hasDiscount) {
      return this.productPrice - 15;
    } else {
      return this.productPrice;
    }
  }
  constructor(private elementRef: ElementRef) {};
  ngAfterContentInit() {
    const bElement = this.elementRef.nativeElement.querySelector('b');
    if (bElement) {
      bElement.style.backgroundColor = this.productColor;
    }
  }

}
