import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigurationService {

    private config = {};

    constructor(private http: Http) {
        return 
    }

    setOption(option: string, value: any) {
        this.config[option] = value;
    }

    getConfig(key:string) {
        console.log(this.config);
        return this.config[key];
    }

    load() {
        this.http.get("dist/development.json")
            .map(response => this.config = response.json());
            // .toPromise()
            // .then(response => this.config = response.json())
            // .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}