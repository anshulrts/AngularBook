import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularBook';

    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });
    }

    onSubmit(f: any): void {
        console.log(f);
    }

}
