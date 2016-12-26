import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
    //selector: 'my-app',
    template: `
        <h1>Archive</h1>
        {{ year }} / {{ month }}
    `
    
})
export class ArchivesComponent {
    year: number;
    month: number;
    
    constructor(private _routeParameters: RouteParams){
        this.year = parseInt(_routeParameters.get("year"));
        this.month = parseInt(_routeParameters. get("month"));
    }
}