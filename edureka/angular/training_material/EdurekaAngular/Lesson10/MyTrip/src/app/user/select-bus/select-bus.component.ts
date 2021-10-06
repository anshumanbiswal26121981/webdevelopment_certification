import { Component, OnInit } from '@angular/core';
import { SelectBusService } from '../services/selectBus.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Journey_Route } from '../models/route.model';

@Component({
  selector: '.select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.css']
})
export class SelectBusComponent implements OnInit {
  pnumber=1;
  place:Place[]=[];
  
    constructor(  private BusService:SelectBusService,  private router:Router ) {//DI - Bus Service & Router
     this.place[0]=new Place()
     }
  
    ngOnInit() {
   
    }
      
    SearchBus(form: NgForm) { //Event handler for Search Bus button click
      let leaving_form = form.value.leaving_form;//Trap the start location textbox value
      let destination;
    
    
      this.place.filter(iteam=>{
        if(iteam.key==form.value.going_to){ //Trap the destination location textbox value
          destination=iteam.value
        }
      })
  
      let date = form.value.depart_date;
      let route:Journey_Route = {
        leaving_form: leaving_form,
        going_to: destination,
        date:date
      }
      localStorage.setItem("route", JSON.stringify(route)); //save the route info to the localStorage
      let routeId = form.value.going_to;
      this.BusService.getRoueId(routeId); //get the route ID from the Service
      this.router.navigate(['search']); //Navigate programatically to the Search route
    }
  
    leave(e){ //Depending on the Leaving from location selection, set the destination location options
   
      let leavingfrom=e.target.value;
      console.log(leavingfrom)
      if(leavingfrom=='pune'){
        this.place= [
          {key:'1109001', value:'Bangalore'} ,        
          {key:'1109004', value:'Mumbai'} ,
          {key:'1109005', value:'Hyderabad'}
    
   
        ]
    }
    else if(leavingfrom=='blr'){
      this.place= [
        {key:'2209002', value:'Pune'} ,
        {key:'2209001', value:'Mumbai'} ,
        {key:'2209003', value:'Hyderabad'} 
       ]
    }
    else if(leavingfrom=='chennai'){
      this.place= [
        {key:'3309003', value:'Bangalore'} ,
        {key:'3309001', value:'Hyderabad'} ,
        {key:'3309002', value:'Mysore'} ,
     
      ]
    }

  
  }
  
  
  }
  export class Place {
    key:string;
    value:string;
  }
