import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service'; //import system defined service

// TODO: Put the Server model/interface in its own file:
interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> { //implements system defined calss 

  constructor(private serversService: ServersService) { } //DI

  //overrides system defined method that grants access to the dynamic url route parameters 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    
    return this.serversService.getServer(+route.params['id']); //calls service method to get server based on id passed
    //route.params = system defined object.property that grants access to dynamic route url parameters
  }
}

