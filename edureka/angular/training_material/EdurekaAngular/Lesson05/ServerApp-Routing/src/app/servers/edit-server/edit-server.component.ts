import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service'; //imports custom service
import { ServersService } from '../servers.service'; //imports custom service

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {

  //custom variabes definition
  server: { id: number, name: string, status: string };
  serverID: number;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,private route: ActivatedRoute, private router: Router) { } //DI

  ngOnInit() {
      this.route.queryParams.subscribe( //system defined event triggered when url route parameters are passed
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false; 
          //if url route parameter allowEdit==1, then assign true to local variable allowEdit, else assign false
        }
      );

      //capture url dynamic route parameter value for :id
      //=+ is shorcut ES6 feature to typecast from string url parameter to numberic value
      this.serverID = +this.route.snapshot.params['id'];          
     
      this.server = this.serversService.getServer(this.serverID); //pass it to service method to get server record
      this.route.queryParams.subscribe( //system defined event triggered hwne url has route parameters provided            
        (queryParams: Params) => {
          this.serverID = queryParams['id'];
        }
      );
   
     this.serverName = this.server.name;     //store the server record details locally
     this.serverStatus = this.server.status; 
  }

  onUpdateServer() {  //custom event hanlder to update server records
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) { //deactivate the Route guard if editing of the server record is allowed
      return true;
    }

    //prevent users from navigating away if changes are not saved
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard your changes?');
    }
    return true;
  }

}
