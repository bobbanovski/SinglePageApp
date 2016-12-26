import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router){        }
    
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous){
        //log arguments on console
        console.log("next: ", next);
        console.log("previous: ", previous);
        //Dirty checking
        // if (this.form.dirty)
        
        //If confirmed, router can deactivate this component and move away
        return confirm("Are you sure you wish to navigate away from this page?");
    }
}