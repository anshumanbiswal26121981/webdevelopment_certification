import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

//custom service that generates messages in the browser 
@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterRouteChange = false; //tracks if message should be displayed if url route changes

    constructor(private router: Router) { //DI
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) { //once user starts navigation on the webpage
                if (this.keepAfterRouteChange) {   //toggle true/false
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert message, custom function defined below
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<any> {//custom function to return an observable notification
        return this.subject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) { //custom method that displays the  success message
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterRouteChange = false) { //custom method that displays the pop-up error message
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }

    clear() { //custom method that clears all pop-up messages
       
        this.subject.next();  // clear by calling subject.next() without parameters
    }
}