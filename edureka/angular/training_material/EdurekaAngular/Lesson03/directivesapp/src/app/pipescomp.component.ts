import { Component,Input } from '@angular/core';

@Component({
  selector: 'fa-pipescomp',
  templateUrl: './pipescomp.component.html',
  styleUrls: ['./pipescomp.component.css']
})
export class PipescompComponent {
   convertString="";
   value:string;
   date: string="2020-06-15T13:45:30 ";
   change(value:string){
     this.value=value;
   }

   //custom pipes
   filteredStatus="";
   servers: any[]=[
      {
        "name":"server1",
        "status":"stable",
        "instanceType":"medium",
        "started":"9,8,2017"
      },
      {
       "name":"server2",
       "status":"offline",
       "instanceType":"small",
       "started":"4,11,2018"
     },
     {
      "name":"server3",
      "status":"stable",
      "instanceType":"medium",
      "started":"9,8,2018"
    },
    {
     "name":"server4",
     "status":"offline",
     "instanceType":"small",
     "started":"4,11,2019"
   },
   {
    "name":"server5",
    "status":"stable",
    "instanceType":"medium",
    "started":"9,8,2020"
  },
  {
   "name":"server6",
   "status":"offline",
   "instanceType":"small",
   "started":"4,11,2018"
 }
   ];

   //pure - impure pipes
   onAddServer(){
      this.servers.push({
        "name":"new server",
        "status":"stable",
        "instanceType":"small",
        "started":"4,11,2021"
      });
   }
}
