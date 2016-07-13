import { Component, OnInit } from '@angular/core';
import { DataTableDirectives } from 'angular2-datatable/datatable';
import { RealmService } from '../shared/realm.service';
import { Realm } from '../shared/realm.model';

@Component({
    moduleId: module.id,
    selector: 'wow-realmlist',
    templateUrl: 'realm-list.component.html',
    providers: [RealmService],
    directives: [DataTableDirectives]
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