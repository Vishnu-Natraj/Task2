import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn = true;
  isNewUser = false;
  public message = new alert(this.isLoggedIn);

  // constructor(private taskComponent: TaskComponent ) {}

  //   gotoHome(){
  //       this.taskComponent.ngOnInit();  
  //   }
}
