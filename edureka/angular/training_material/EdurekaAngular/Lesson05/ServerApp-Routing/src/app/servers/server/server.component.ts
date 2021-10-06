import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service'; //import custom service

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };  //local variable defined

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { } //DI

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {  //system defined event triggers when data is passed to this url route
        this.server = data['server']; //store the data locally (This is the server record to display)
      });
  }

  onEdit() { //on editing the record this custom event handler executes
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    //programattic navigation to /edit  , relative to the current url routr "http://localhost:4200/servers"
    //queryParamsHandling = Save query parameters state when routing between components
  }

}
