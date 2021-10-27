import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "./login.component";
import { MyButtonComponent } from "./my.button.component";


@NgModule({
    declarations: [LoginComponent, MyButtonComponent],
    providers:[],
    imports:[BrowserModule, FormsModule],
    bootstrap:[LoginComponent] // you need to say here as which is the root component
})

export class LoginModule {

}