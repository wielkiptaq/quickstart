import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Page} from './page';

@Injectable()
export class PageService {

    constructor(private http: Http) {}
    
    getPages(): Promise<Page[]>{
        return this.http.get('app/pages')
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}