import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';


@Component({
    //selector: 'my-app',
    template: `
        <h1>HomePage</h1>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archives', { year: archive.year , month: archive.month}]" >
                    {{ archive.year }} / {{ archive.month }}
                </a>
            </li>
        </ul>
    `,
    directives: [RouterLink],
})
export class HomeComponent {
    archives = [
        {
            year: 2015,
            month: 1
        },
        {
            year: 2015,
            month: 2
        },
        {
            year: 2015,
            month: 3
        }
    ]
}