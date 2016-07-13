import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'bs-navbar',
    templateUrl: 'navbar.component.html',
    directives : [ROUTER_DIRECTIVES]
})
export class NavBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}