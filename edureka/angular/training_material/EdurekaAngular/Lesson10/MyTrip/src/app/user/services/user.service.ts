import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
    private Root_Url = "https://bdbusticket.firebaseio.com/"; //GCP clould hosted DataBase REST Endpoint / Service
    constructor(
        private http:HttpClient //Inbuilt class to connect to REST Service
    ){}

    createUser(user){
      return   this.http.post(this.Root_Url+'users.json',user) //REST POST service call to Cloud DB to insert new user record
    }
}