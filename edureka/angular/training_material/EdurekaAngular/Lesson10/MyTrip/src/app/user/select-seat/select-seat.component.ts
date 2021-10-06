import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Seat } from '../models/seat.model';
import { Journey } from '../models/journey.model';
import { Journey_Route } from '../models/route.model';
import { Router } from '@angular/router';
import { Bus } from '../models/bus.model';
import { SelectBusService } from '../services/selectBus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit ,OnDestroy{
  @Input('bus') bus:Bus;
  @Output('closeModal') closeModal = new EventEmitter(); //for raising custom event oto close this modal dialog
showSeatList:Seat[]=[];
total=0;
fillupSeat=[];
alert=false;

subscription:Subscription;
  constructor(
    private route:Router,
    private BusService:SelectBusService
  ) { }

  ngOnInit() {
     this.getbookSeat(); //selects seats //getbookSeat() defined below
  }

  Seat(e) {//display seats 
   let seats=[];
   seats= this.showSeatList.map(iteam=>{ //Display list of seats
     return iteam.seatNo
   })
    let id = document.getElementById(e);
  
    if((this.fillupSeat.indexOf(String(e))<0) && (seats.indexOf(e)<0)){
      if((this.showSeatList.length!=4)) {
        id.innerHTML = `   <img src="../assets/img/fseat.png" alt="">` //icon image of  a seat 
      
        let seat={
          seatNo:e,
          fare:this.bus.fare,
          seatClass:'economy'
        }
        this.totalFare(seat.fare);
        this.showList(seat);
      }
      else{
        this.alert=true;
      }
    }

  }

  showList(seat){//generate an array of seats to be displayed
      this.showSeatList.push(seat)
  }

  totalFare(fare){ //calculate totalFare based on seats selected
    this.total+=fare;
  }

  confirmJourney(){//Confirms seat selection
    let route:Journey_Route= JSON.parse(localStorage.getItem("route"));

    let seats=[];
  seats= this.showSeatList.map(iteam=>{
    return iteam.seatNo;
  });

  let journey :Journey={
    bus:this.bus,
    seats:seats,
    fare:Number(this.total),
    journey_route:route
  }

localStorage.setItem("journey",JSON.stringify(journey)) ; //store journey data in localStorage
this.route.navigate(['user-form']); //navigate to the user-form for sign-in post seat selection
this.closeModal.emit();//close this modal dialog
  }


  getbookSeat(){//get list of available seats
    
    let route:Journey_Route= JSON.parse(localStorage.getItem("route"))
    let busid=this.bus.$key;
    let key = String(new Date(route.date).getTime());
    console.log(busid,key)
    this.subscription=this.BusService.getFillupseat(key,busid)
    .subscribe(res=>{
      for(key in res){
        for(let i in res[key].seats){
          this.fillupSeat.push(res[key].seats[i])
          this.changeSeatColor(res[key].seats[i])
        }
      }
    })
  }

  changeSeatColor(seatNo){//on seat selection, change the image/ color to indicate seat blocked
    let id= document.getElementById(seatNo)
    id.innerHTML=`  <img src="../assets/img/bookseat.png">`
    id.removeEventListener("click",this.Seat);
    
  
  }

  ngOnDestroy(){//unsubscribe from the notification 
    this.subscription.unsubscribe();
  }

} 

