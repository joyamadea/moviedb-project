import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  flag:boolean=true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(username,password){
    if(username.value=='uaspti' && password.value=='uasptitersusah'){
      localStorage.setItem('username',username.value);
      localStorage.setItem('password',password.value);
      this.router.navigate(['/data']);
      this.flag=true;
    }
    else{
      this.flag=false;
    } 
    
  }
}
