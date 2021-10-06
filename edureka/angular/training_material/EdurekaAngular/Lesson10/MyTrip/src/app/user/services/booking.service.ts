import { Injectable } from "@angular/core";
import { Journey } from "../models/journey.model";
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import { User } from "../models/user.model";
import { Router } from "@angular/router"; //For progrmatically navigating
import { BehaviorSubject } from "rxjs"; // Retuns an observable. Enhancement over EventEmmiter class for sending notifications

@Injectable()

export class BookingService {

    journey_info= new BehaviorSubject('')
    cast= this.journey_info.asObservable();
    private USerId;
    private Root_Url = "https://bdbusticket.firebaseio.com/"; //GCP clould hosted DataBase REST Endpoint / Service
   
    constructor(
        private http: HttpClient,          //Inbuilt class to connect to REST Service
        private UserService: UserService,  //Injecting Customer Service object using DI
        private router: Router             //For programatically navigating , Injecting Router
    ) { }

    // userBooking(jourey:Journey) {
    //     this.http.post(this.Root_Url+'user_booking',jourey)
    // }

    async seatBooking(jourey: Journey, user) { //async (non blocking)  method to book a seat 
        let busID = jourey.bus.$key;
        let booking = new Object()
        let key = new Date(jourey.journey_route.date).getTime();
        await this.createUserID(user).subscribe(   //Subscribing to a notification on the Observable. //CreateUserId() defined below
            res => {                               //await indicates async mode/ non blocking thread
                booking = {
                    user_id: Object.values(res)[0],
                    seats: jourey.seats
                }
                this.chekBookingDate_BusInfo(key, jourey, booking, busID) //custom method defined below
            }); //moment the client wants to book seats, we are notified and we check seat availability 

    }

    private async createBookingDate(journey: Journey, key, booking, busID) {  //async (non blocking)  method to create Booking Date Record
        await this.create(journey, key, busID, booking); //create the booking Dates record as per details passed.//create() defined below
        // await this.createBooking(booking, key,busID)
    }


    private async  create(journey: Journey, key, busID, booking) {  //async (non blocking)  method to create a new Booking Object Record
        let location = journey.journey_route.leaving_form + ' to ' + journey.journey_route.going_to;
        this.http.put(this.Root_Url + 'booking/' + key + '/' + busID + '.json', {
            bus: { //PUT method adds new booking record into the DB after initializing it.
                location: location,
                name: journey.bus.name,
                coach_type: journey.bus.coach_type,
                nfareame: journey.bus.fare,
                time: journey.bus.time,
                seat: journey.bus.seat
            }
        })
            .subscribe(res => {//Subscribing to a notification on the Observable.
                this.createBooking(booking, key, busID);  //createBooking() defined below
            },
                error => console.log(error));//If any error on seat booking raise error
    }

    private CheckBusID(busID, key, booking, journey) { //Check the Bus ID
        let busidArray = [];
        this.http.get(this.Root_Url + 'booking/' + key + '.json')
            .subscribe(res => { //Subscribing to a notification on the Observable. Triggered when client attempts a booking
                for (let key in res) { 
                    busidArray.push(key) //iterate over available busses and add them to busidArray
                }
                if (busidArray.indexOf(String(busID)) > -1) { //If bus exsists , create the booking
                    this.createBooking(booking, key, busID);  //createBooking() defined below
                }
                else {
                    this.create(journey, key, busID, booking); //else create the new journey record with required busid and booking data
                }
            });
    }

    private async chekBookingDate_BusInfo(key, journey, booking, busID) {  //async (non blocking)  method for bus availability on a date
        let keys = [];
        this.http.get(this.Root_Url + 'booking.json')
            .subscribe(  //Subscribing to a notification on the Observable. Triggered when client check bus avalability for a date
                res => {
                    for (let key in res) {
                        keys.push(key)
                    }
                    if (keys.indexOf(String(key)) > -1) { //If bus exsists on a date, get the bus ID
                        this.CheckBusID(busID, key, booking, journey)  //CheckBusID() defined below
                    }
                    else {
                        this.createBookingDate(journey, key, booking, busID); //else create Bookind Date Record
                    }
                }
            );
    }

    private createBooking(booking, key, busID) {  //Create Booking Record
        let tketID;
        this.http.post(this.Root_Url + 'booking/' + key + '/' + busID + '/seat_booking.json', booking)
            .subscribe(res => { //Subscribing to a notification on the Observable. Triggered when client creates a new booking
                for(let key in res){
                    tketID= res[key]
                }
                this.createPrintView(tketID); //if success print ticket //createPrintView() defined below
            },
                err => console.log(err)); //if error display error

       
    }

    private createUserID(user) { //creates a new user
        localStorage.setItem("user",JSON.stringify(user)) ;// store new user in localStorage
        return this.UserService.createUser(user)
    }

    createPrintView (tketID){ //Print view generation of the ticket
        let journey= JSON.parse(localStorage.getItem("journey"));
        let user= JSON.parse(localStorage.getItem("user"));
        let Ticket= {
            ticketId:tketID,
            journey:journey,
            user:user
        }
        this.getJourneyInfo(Ticket);
        this.router.navigate(['print']); //programatically navigate to that view
    }

    getJourneyInfo(Ticket){ //gets journey information to clear the record from localStorage
        this.journey_info.next(Ticket);
        localStorage.removeItem("journey");
        localStorage.removeItem("route");
        localStorage.removeItem("user");
    }


}



