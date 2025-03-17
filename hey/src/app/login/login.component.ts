import { Component, OnInit } from '@angular/core';
import { json } from 'stream/consumers';
import { FormsModule } from '@angular/forms';
// import { Router } from 'express';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   
  signupUsers : any[] = [];
  signupObj : any = {
  userName : '',
  email : '',
  password : ''
  };
  loginobj : any = {
    userName : '',
    password : '',
    email : ''

  }
   constructor(private router: Router){}

   ngOnInit(): void {
     const localData = localStorage.getItem('signupUsers')
     if(localData != null )
      this.signupUsers = JSON.parse(localData); 
   }
   onSignup(){
   this.signupUsers.push(this.signupObj)
   localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers))
  this.signupObj = {
  userName : '',
  email : '',
  password : ''
   };
  }
   onLogin(){
    
    // debugger
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginobj.userName && m.password == this.loginobj.password);
    if (isUserExist != undefined){
      alert('User Login Successfull');
      this.router.navigate(['movie']);
    }
      else {
        alert('Wrong credentials');
      }
   }
  }