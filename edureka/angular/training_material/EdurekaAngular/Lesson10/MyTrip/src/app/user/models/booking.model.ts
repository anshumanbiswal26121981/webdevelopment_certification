//Booking Schema 
//Booking has Bus object as its attribute

import { Bus } from "./bus.model";
import { Seat } from "./seat.model";

export class Booking {
    $key:string //primary key - unique id
    location:string;
    bus:Bus;
    seat_book_User:SeatBook;
}

export interface SeatBook {
    $key:string; //primary key - unique id
    user_id:string;
    seats:Seat[];
}
