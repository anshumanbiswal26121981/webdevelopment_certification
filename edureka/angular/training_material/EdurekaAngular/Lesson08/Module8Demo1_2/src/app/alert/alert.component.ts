import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import {AlertService} from '../_services/alert.service'; //imports custom alert service

//custom component to render the login/register success messages
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService:AlertService) { } //DI

  ngOnInit() {
    this.subscription = this.alertService.getAlert()
    .subscribe(message => {
        switch (message && message.type) {
            case 'success':
                message.cssClass = 'alert alert-success';
                break;
            case 'error':
                message.cssClass = 'alert alert-danger';
                break;
        }

        this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
