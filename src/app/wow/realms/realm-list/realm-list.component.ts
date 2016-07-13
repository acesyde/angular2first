import { Component, OnInit } from '@angular/core';
import { RealmService } from '../shared/realm.service';
import { Realm } from '../shared/realm.model';

@Component({
    moduleId: module.id,
    selector: 'wow-realmlist',
    templateUrl: 'realm-list.component.html',
    providers: [RealmService]
})
export class RealmListComponent implements OnInit {

    realms:Realm[];

    constructor(private realmService: RealmService) { }

    ngOnInit() { 
        this.getRealms();
    }

    getRealms() {
        this.realmService.getRealms().then(realms => this.realms = realms);
    }

}