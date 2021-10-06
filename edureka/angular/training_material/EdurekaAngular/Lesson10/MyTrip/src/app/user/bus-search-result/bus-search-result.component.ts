import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { SelectBusService } from '../services/selectBus.service';
import { Subscription } from 'rxjs';
import { Bus } from '../models/bus.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-result-info',
  templateUrl: './bus-search-result.component.html',
  styleUrls: ['./bus-search-result.component.css']
})

export class BusSearchResultComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  buses:Bus[]=[];
  modalRef: BsModalRef;
  route=new Object();
    constructor(
      private BusService:SelectBusService,
      private modalService: BsModalService,
      private router:Router
    ) { }
  
    ngOnInit() {
      this.route=JSON.parse(localStorage.getItem("route")); //get the route info from localStorage
      if(!this.route) {
        this.router.navigate(['']) ;//Programatically navigate to the home route
      }
     this.subscription= this.BusService.castId.subscribe( //Listen to notification to display search result
        res=>this.getAllBus(res) //get buses to display based on joiurney details selected //getAllBus() defined below
      )
    }
  
    getAllBus(res){ // gets bus details based on journey information
      let bus=new Object();
      this.BusService.getBus(res)
      .subscribe(
        res=>{
          for(let key in res){
            bus=res[key];
            bus['$key']=key;
            this.buses.push(bus as Bus);

          }
        }
      )
  
    }
  ngOnDestroy() {
    this.subscription.unsubscribe(); //benefit of Rxjs , un subscnrive when notifications are not required
  }
  
  openModal(template: TemplateRef<any>,bus) {
    this.modalRef = this.modalService.show(template); //show view with modal dialog for seat selection
    // let journey={
    //   route:this.route,
    //   bus_info:bus,
    //   seats:
    // }
    
  }
  closeModal (){  //close the modal dialog
    this.modalRef.hide();
  }
  
  }
  
