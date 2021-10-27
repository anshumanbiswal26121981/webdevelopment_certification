import { Component } from "@angular/core";


@Component({
    selector:'login-component',
    templateUrl: './login.component.html'

})

export class LoginComponent {
    title: String = 'Sign In';
    username:String = 'testuser';
    flag:boolean = false;
    students:Array<String> = ['Anshuman','Swati','Laisha','namo','Anupam'];

    addStudent() {
        this.students.push(this.username);
    }

}
