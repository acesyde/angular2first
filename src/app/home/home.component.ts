import {Component} from '@angular/core';
import {RealmListComponent} from '../wow/realms/realm-list/realm-list.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    directives: [RealmListComponent] 
})

export class HomeComponent {
}
