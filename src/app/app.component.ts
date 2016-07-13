import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

// Shared components
import {NavBarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

// Precompiled components
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, NavBarComponent, FooterComponent],
    precompile :[HomeComponent,AboutComponent]
})

export class AppComponent {
}
