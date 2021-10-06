import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];  //declare local servers array

  constructor(private serversService: ServersService) { } //DI 

  ngOnInit() {
    this.servers = this.serversService.getServers();  //get servers json array and store locally
  }



}
