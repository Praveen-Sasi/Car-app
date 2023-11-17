import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email:String="";
  password:String="";
  name:String="";
  phone:String="";
  apiurll:String="https://retoolapi.dev/uKh7EY/priya";
  users : any[] = [];

  constructor(private apiService : ApiService){

  }
  registerUser(){
    if(this.email != "" && this.password != "" && this.name != "" && this.phone != ""){
      let user = {
        userName : this.name,
        pswd : this.password,
        email : this.email,
        mobile : this.phone
      }
      this.apiService.insertUser(user).subscribe((responce)=>{
        if(responce){
          console.log("ok")

        }
      
      });
    }
  }







  // getinput(){
  //   return String({
  //     "name":this.name,
  //     "email":this.email,
  //     "phone":this.phone,
  //     "password": this.password
      

  //   })
  // }

  // signup(){
  //   sessionStorage.setItem('email',String(this.email));
  //   sessionStorage.setItem('password',String(this.password));

  //   fetch(String(this.apiurll),{
  //     method:'POST',
  //     body:JSON.stringify(this.getinput),
  //     headers:{
  //       'Content-Type':'application/json'
  //       }

  //   }).then((responce)=>{
  //     if (responce.ok){
  //       alert('signup success')
  //       console.log("ok")
  //       console.log(responce.json())
  //     }else{
  //       throw new Error("error")
  //     }
  //   }).catch((error)=>{
  //     console.log(error)

  //   }
  //   )


    
    

  // }

}
