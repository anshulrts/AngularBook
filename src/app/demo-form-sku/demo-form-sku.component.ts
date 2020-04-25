import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

    sku: string = "abc";
    constructor() { }

    ngOnInit(): void {
    }

    check(c: HTMLInputElement): boolean {
        console.log(c);
        return false;
    }

}
