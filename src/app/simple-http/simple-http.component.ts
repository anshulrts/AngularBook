import { Component, OnInit } from '@angular/core';
import { SimpleHttpService } from '../services/simplehttp.service';

@Component({
  selector: 'simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
    data: Object;
    loading: boolean;

    constructor(private _simpleHttpService: SimpleHttpService) {

    }

    makeRequest(): void {
        this.loading = true;

        this._simpleHttpService.getPosts()
            .subscribe(
            data => {
                this.data = data
                this.loading = false;
            },
            error => {
                alert('An unexpected error occurred');
                console.log(error);
            });

    }

    ngOnInit(): void {
    }

}
