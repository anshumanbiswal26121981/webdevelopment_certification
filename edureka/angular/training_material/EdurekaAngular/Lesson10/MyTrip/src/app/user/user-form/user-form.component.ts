import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Journey } from '../models/journey.model';
import { BookingService } from '../services/booking.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  journey: Journey;
  constructor(
    private BookingService: BookingService,
    private route:Router
  ) { }

  ngOnInit() {
    this.journey = JSON.parse(localStorage.getItem("journey"));; // get joiurney details from localStorage
    if(!this.journey){
      this.route.navigate(['']); // Navigate programatically to home
    }
  }

  userForm(form: NgForm) { //get reference to form HTML elements
    let name = form.value.user_name;
    let mobile_no = form.value.user_mobile;
    let email = form.value.user_email;
    let user = {
      user_email: email,
      mobile: mobile_no,
      user_name: name
    }

    this.BookingService.seatBooking(this.journey, user); // book seats for this user.
    this.route.navigate(["print"]); //navigate to print ticket screen 
  }

}