import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS } from './app.routes';
import {ConfigurationService } from './shared/configuration/configuration.service';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    ConfigurationService
]).catch(err => console.error(err));
