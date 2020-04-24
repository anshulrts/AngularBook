import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: `<div class="price-display">\${{price}}</div>`,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

    @Input() price: number;
        
    constructor() { }

    ngOnInit(): void {
    }

}
