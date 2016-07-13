import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Realm } from '../shared/realm.model';

@Injectable()
export class RealmService {

    apiKey: string;
    constructor(private http: Http) {
        this.apiKey = "cchp33n28pvstrw2gv8364gesdhgjq4w";
    }

    getRealms() : Promise<Realm[]> {
        return this.http.get("https://eu.api.battle.net/wow/realm/status?apiKey="+this.apiKey)
            .toPromise()
            .then(response => response.json().realms)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}