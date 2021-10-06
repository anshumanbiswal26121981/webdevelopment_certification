import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bus } from "../models/bus.model";
import {BehaviorSubject} from 'rxjs';// Retuns an observable. Enhancement over EventEmmiter class for sending notifications

@Injectable()

export class SelectBusService {
    private Root_url = "https://bdbusticket.firebaseio.com/"; //GCP clould hosted DataBase REST Endpoint / Service
    private routeId= new BehaviorSubject <string> (''); 
    castId=this.routeId.asObservable();
    
    constructor(private http: HttpClient) { }  //Inbuilt class to connect to REST Service

    getBus(routeId) {
       return this.http.get(this.Root_url + 'buses/'+routeId+'.json'); //Get buses for a Route from the DB
    }
    getRoueId(routeId){
        this.routeId.next(routeId) //Retreive the Route ID from the DB in async  mode.
    }
    getFillupseat(key,busID){
       return  this.http.get(this.Root_url+'booking/'+key+'/'+busID+'/seat_booking.json');//Get seat availability based on bus ID from DB
        //console.log(this.Root_url+'booking/'+key+'/'+busID+'.json')
    }
    getRoute(key){
        return  this.http.get(this.Root_url+'routes/'+key+'.json')  //Get Route based on key passed, from the DB
    }
}
