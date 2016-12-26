import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES /*RouterOutlet, RouterLink*/} from 'angular2/router';

import {HomeComponent} from './home.component';
import {ArchivesComponent} from './archives.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault:true },
    { path: '/archives/:year/:month', name: 'Archives', component: ArchivesComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES] /*RouterOutlet, RouterLink*/
})
export class AppComponent {
}