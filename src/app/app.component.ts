import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularBook';

    // myForm: FormGroup;
    myForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        password: new FormControl()
    });
    constructor() {

    }

    // form = new FormGroup({
    //     username: new FormControl('',[
    //         Validators.required,
    //         Validators.minLength(3),
    //         SignupValidator.cannotContainSpace
    //     ]),
    //     password: new FormControl()
    // });

    onSubmit(f: any): void {
        debugger;
        console.log(f);
    }

}
