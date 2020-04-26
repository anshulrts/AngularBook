import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SimpleHttpService {
    private url: string = 'https://12jsonplaceholder.typicode.com/posts/1';

    constructor(private http: HttpClient){
    }

    getPosts() {
        return this.http.get(this.url);
    }
}