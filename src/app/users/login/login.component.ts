import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: String = '';
  password: String = '';
  message: String = '';
  users : any[] = [];

  constructor(private apiService : ApiService,private router:Router ){

  }
 


     
  redirectToHome(){
    
    console.log(this.users);
    this.message = "";
    if(this.email != "" && this.password != ""){
      this.apiService.getUsers().subscribe(
        (data : any) => {
          this.users = data;
          console.log(data);

          for(let user of this.users){
            if(user.userName == this.email && user.pswd == this.password){
              this.message = "Email and Password Matched...";
              break;
            }
            this.router.navigate(['/register'])
          }
          if(this.message == ""){
            this.message = "Invalid Email or password";
          }
        }
      );
      
    }else{
      this.message = "Values Kodu thala...";
    }
  }
}
